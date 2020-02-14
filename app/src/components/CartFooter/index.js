import React from 'react';
import { useSelector } from 'react-redux';

import history from '~/services/history';

import { Container } from './styles';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function CartFooter() {
  const basketQuantity = useSelector(state => state.basket.quantity);

  function handleCartRedirect() {
    history.push('/comanda');
  }

  return (
    <Container id="cart" onClick={handleCartRedirect}>
      <div>
        <h1>{basketQuantity}</h1>
      </div>
      <div>
        <div>
          <span>seta</span>
          <span>Itens na bandeja</span>
        </div>
      </div>
      <div>
        <img src={cartIcon} alt="Cart" />
      </div>
    </Container>
  );
}
