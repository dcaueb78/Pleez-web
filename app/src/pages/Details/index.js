import React, { useState, useEffect } from 'react';

import { Wrapper, Content, Scroll, foodImageCard } from './styles';
import FoodImage from '~/components/FoodImage';
import CartFooter from '~/components/CartFooter';

import api from '~/services/api';
import history from '~/services/history';
import { toast } from 'react-toastify';

import { MdArrowBack } from 'react-icons/md';
import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';

export default function Details({ match }) {
  const { restaurant, dish } = match.params;

  const [restaurantName, setRestaurantName] = useState('');
  const [dishDetails, setDishDetails] = useState([]);

  useEffect(() => {
    async function findDishDetails(dish_id) {
      const response = await api.get(`dish-details/${dish_id}`);
      setDishDetails(response.data);
    }

    findDishDetails(dish);
  }, []);

  return (
    <Wrapper>
      <Content>
        <button onClick={history.goBack}>
          <MdArrowBack size={32} color="white" />
        </button>
        <img src={logo} alt="Pleez" />
        <Scroll>
          <h1>{dishDetails.name}</h1>
          <FoodImage/>
          <h3>Descrição:</h3>
          <p>{dishDetails.details}</p>
          <h3>Alguma observação?</h3>
          <textarea placeholder="Ex: Sem cebola..."/>
        </Scroll>
      </Content>
      <CartFooter />
    </Wrapper>
  );
}
