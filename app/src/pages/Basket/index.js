import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MdArrowBack } from 'react-icons/md';

import { useChairNumber } from '~/store/hooks/basket';
import api from '~/config/api';
import history from '~/services/history';
import { formatPrice } from '~/utils/format';

import Payment from '~/components/Payment/index';

import 'react-credit-cards/es/styles-compiled.css';

import { dishesDetails } from '~/services/api/endPoints';
import { infos } from '~/services/api/pages';

import { Wrapper, Content, Scroll } from './styles';
import BasketContent from '~/components/BasketContent';

import logo from '~/assets/logo.png';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function Basket() {
  const basket = useSelector(state => state.basket.basket);
  const chair = useChairNumber();
  const [completeBasket, setCompleteBasket] = useState([]);

  const totalPrice = completeBasket
    .map(dish => dish.price * dish.quantity)
    .reduce((a, b) => a + b, 0);

  const formatDishPrice = dish => {
    const formattedPrice = formatPrice(dish.price * dish.quantity);
    return formattedPrice;
  };

  const existItemsOnBasket = () => !!completeBasket.length;

  useEffect(() => {
    function validateChairExists() {
      if (!chair) {
        history.push(infos);
      }
    }

    validateChairExists();
  }, [chair]);

  useEffect(() => {
    async function loadBasketDishInfo() {
      if (basket.length <= 0) return;

      const idList = await basket.map(dish => dish.dishId);

      const getBasketDetailsByIds = await api.post(dishesDetails, {
        dishes_id: idList
      });

      const getCompleteBasketDishDetailsWithQuantity = await getBasketDetailsByIds.data.map(
        (dish, index) => ({
          ...dish,
          quantity: basket[index].dishQuantity,
          comment: basket[index].dishComment
        })
      );
      setCompleteBasket(getCompleteBasketDishDetailsWithQuantity);
    }
    loadBasketDishInfo();
  }, [basket]);

  return (
    <Wrapper>
      <Content>
        <button type="button" onClick={history.goBack}>
          <MdArrowBack size={32} color="white" />
        </button>
        <img src={logo} alt="Pleez" />
      </Content>
      <BasketContent>
        <header>
          <p>seta</p>
          <div>
            <h1>Sua Bandeja</h1>
            <img src={cartIcon} alt="Cart" />
          </div>
        </header>
        <Scroll>
          {completeBasket.map(dish => (
            <div key={`${dish.id}-${dish.quantity}`}>
              <div>
                <h2>{dish.quantity}x</h2>
                <p>{dish.name}</p>
              </div>
              <p>
                <b>Observação: </b>
                <span>{dish.comment === '' ? 'Nenhuma' : dish.comment}</span>
              </p>
              <div>
                <p>
                  <span>Valor: </span>
                  <b> {formatDishPrice(dish)} </b>
                </p>
              </div>
            </div>
          ))}
          <div>
            <span>
              Total: <b>{formatPrice(totalPrice)}</b>
            </span>
          </div>

          {existItemsOnBasket ? (
            <Payment completeBasket={completeBasket} chair={chair} />
          ) : (
            <p>Sua bandeja está vazia :(</p>
          )}
        </Scroll>
      </BasketContent>
    </Wrapper>
  );
}
