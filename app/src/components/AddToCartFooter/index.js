import React from 'react';

import { Container } from './styles';

export default function AddToCartFooter({ subTotal, addToBasket }) {
  return (
    <Container id="cart">
      <div>
        <span>Valor do pedido:</span>
        <h3>{subTotal ? subTotal : 0}</h3>
      </div>
      <button onClick={addToBasket}>Adicionar a Bandeja</button>
    </Container>
  );
}
