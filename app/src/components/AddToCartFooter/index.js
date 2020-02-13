import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';

export default function AddToCartFooter({ subTotal, addToCart }) {
  return (
    <Container id="cart">
      <div>
        <span>Valor do pedido:</span>
        <h3>{subTotal ? subTotal : 0}</h3>
      </div>
      <button onClick={addToCart}>Adicionar a Bandeja</button>
    </Container>
  );
}
