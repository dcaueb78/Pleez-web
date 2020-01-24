import React from 'react';

import { Container } from './styles';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function CartFooter() {
  return (
    <Container id="cart">
      <div>
        <h1>0</h1>
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
