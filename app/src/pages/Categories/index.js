import React from 'react';

import { Wrapper, Content, Scroll } from './styles';
import FoodCard from '~/components/FoodCard';
import CartFooter from '~/components/CartFooter';

import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';

export default function Categories() {
  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Pleez" />

        <Scroll>
          <img src={unclejoe} alt="Restaurante" />
          <FoodCard name="BURGUERS" alt="burguer" />
          <FoodCard name="SIDES" alt="sides" />
          <FoodCard name="DRINKS" alt="drinks" />
          <FoodCard name="DRINKS" alt="drinks" />
          <FoodCard name="DRINKS" alt="drinks" />
          <FoodCard name="DRINKS" alt="drinks" />
          <FoodCard name="DRINKS" alt="drinks" />
        </Scroll>
      </Content>
      <CartFooter />
    </Wrapper>
  );
}
