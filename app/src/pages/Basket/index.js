import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { addToBasket } from '~/store/modules/basket/actions';
import api from '~/services/api';
import history from '~/services/history';
import { formatPrice } from '~/utils/format';

import { Wrapper, Content, Scroll } from './styles';
import BasketContent from '~/components/BasketContent';

import { MdArrowBack } from 'react-icons/md';
import logo from '~/assets/logo.png';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function Basket() {
  const basket = useSelector(state => state.basket.basket);
  const [completeBasket, setCompleteBasket] = useState([]);

  useEffect(() => {
    async function loadBasketDishInfo() {
      const idList = await basket.map(dish => (dish.dishId));

      const basketDetails = await api.post('/dishes-details', {
        dishes_id: idList
      })
      setCompleteBasket(basketDetails.data);
      console.log(basketDetails.data);
    }
    loadBasketDishInfo();
  }, [basket]);
  return (
    <Wrapper>
      <Content>
        <button onClick={history.goBack}>
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
        <Scroll></Scroll>
        <footer>
          <button>Fazer o pedido</button>
        </footer>
      </BasketContent>
    </Wrapper>
  );
}
