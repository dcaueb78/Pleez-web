import React from 'react';

import { Wrapper, Content } from './styles';
import FoodCard from '~/components/FoodCard';

import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';
import cartIcon from '~/assets/icons/CartIcon.png';

export default function Categories() {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Pleez" />

        <div class="items">
          <img src={unclejoe} alt="Restaurante" />
          <FoodCard name="BURGUERS" alt="burguer" />
          <FoodCard name="SIDES" alt="sides" />
          <FoodCard name="DRINKS" alt="drinks" />
          <FoodCard name="DRINKS" alt="drinks" />
        </div>
      </Content>
      <div id="cart">
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
      </div>
    </Wrapper>
  );
}
