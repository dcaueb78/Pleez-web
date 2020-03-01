import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { MdArrowBack } from 'react-icons/md';

import { useChairNumber, useRestaurantId } from '~/store/hooks/basket';
import api from '~/config/api';
import history from '~/services/history';
import { formatPrice } from '~/utils/format';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { dishesDetails, order } from '~/services/api/endPoints';

import { Wrapper, Content, Scroll } from './styles';
import BasketContent from '~/components/BasketContent';

import logo from '~/assets/logo.png';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function Basket({ location }) {
  const basket = useSelector(state => state.basket.basket);
  const chair = useChairNumber();
  const restaurantId = useRestaurantId();
  const [completeBasket, setCompleteBasket] = useState([]);

  const ReactSwal = withReactContent(Swal);

  const formatDishPrice = dish => {
    const formattedPrice = formatPrice(dish.price * dish.quantity);
    return formattedPrice;
  };

  const handleDoAPayment = async () => {
    const orderResult = await api.post(order, {
      dishes: completeBasket,
      restaurant_id: restaurantId,
      chair: chair
    });

    if (orderResult) {
      ReactSwal.fire({
        title: <p>Pedido Confirmado!</p>,
        footer: 'Daqui a pouco seu pedido vai chegar :D',
        icon: 'success'
      }).then(() => {
        history.push(`/categorias/${restaurantId}/${chair}`)
      });
    }
  };

  useEffect(() => {
    function validateChairExists() {
      if (!chair) {
        history.push('/informacoes');
      }
    }

    validateChairExists();
  }, []);

  useEffect(() => {
    async function loadBasketDishInfo() {
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
        </Scroll>
        <footer>
          <button type="button" onClick={handleDoAPayment}>
            Fazer o pedido
          </button>
        </footer>
      </BasketContent>
    </Wrapper>
  );
}
