import React, { useState, useEffect } from 'react';

import { Wrapper, Content, Scroll } from './styles';
import FoodCard from '~/components/FoodCard';
import CartFooter from '~/components/CartFooter';

import api from '~/services/api';
import history from '~/services/history';
import { toast } from 'react-toastify';

import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';

export default function Categories({ match }) {
  const { restaurant, chair } = match.params;

  const [restaurantName, setRestaurantName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function findAllCategoriesFromSelectedRestaurant(restaurant_id) {
      const response = await api.get(`category/${restaurant_id}`);
      setCategories(response.data);
    }

    findAllCategoriesFromSelectedRestaurant(restaurant);
  }, []);

  useEffect(() => {
    async function shouldRestaurantExists(restaurant_id) {
      try {
        const response = await api.get(`restaurant/${restaurant_id}`);
        setRestaurantName(response.data.name);
      } catch (err) {
        toast.error(
          'Não consegui achar o restaurante :( Poderia tentar mais uma vez?'
        );
        history.push('/');
      }
    }

    shouldRestaurantExists(restaurant);
  }, []);

  return (
    <Wrapper>
      <Content>
        <img src={logo} alt="Pleez" />
        <Scroll>
          {/* <h1>{restaurantName}</h1> */}
          <img src={unclejoe} alt="Restaurante" />

          {categories.length > 0 ? (
            <>
              {categories.map(category => (
                <FoodCard
                  key={category.id}
                  name={category.name}
                  alt={category.name}
                  redirect={`/pratos/${restaurant}/${category.id}`}
                />
              ))}
            </>
          ) : (
            <h1>Não possui categorias!</h1>
          )}
        </Scroll>
      </Content>
      <CartFooter />
    </Wrapper>
  );
}
