import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function CartFooter() {
  const basketQuantity = useSelector(state => state.basket.quantity);

  return (
    <Container id="cart">
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
