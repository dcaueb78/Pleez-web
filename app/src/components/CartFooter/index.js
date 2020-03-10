import React from 'react';
import { useSelector } from 'react-redux';

import { MdKeyboardArrowUp } from 'react-icons/md';

import history from '~/services/history';

import { basket } from '~/services/api/pages';

import { Container } from './styles';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function CartFooter() {
  const basketQuantity = useSelector(state => state.basket.quantity);

  function handleCartRedirect() {
    history.push(basket);
  }

  return (
    <Container id="cart" onClick={handleCartRedirect}>
      <div>
        <h1>{basketQuantity}</h1>
      </div>
      <div>
        <div>
          <button type="button">
            <MdKeyboardArrowUp size={32} color="white" />
          </button>
          <span>Itens na bandeja</span>
        </div>
      </div>
      <div>
        <img src={cartIcon} alt="Cart" />
      </div>
    </Container>
  );
}
