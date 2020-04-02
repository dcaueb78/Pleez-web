import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRestaurant } from '~/store/modules/account/actions';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

import RestaurantCard from '~/components/RestaurantCard';

import { MdAdd } from 'react-icons/md';

export default function Restaurants() {
  const dispatch = useDispatch();
  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurant');

      setRestaurants(response.data);
    }
    loadRestaurants();
  }, []);

  useEffect(() => {
    if (restaurantSelected) {
      history.push('/dashboard');
    }
  }, []);

  const handleSelectRestaurant = (restaurantId) => {
    dispatch(selectRestaurant(restaurantId));
    history.push('/dashboard');
  };

  const handleCreateNewRestaurant = () => {
    history.push('/novo-restaurante');
  };

  return (
    <Container>
      <header onClick={handleCreateNewRestaurant}>
        <div>
          <button type="button">
            <MdAdd size={44} color="#fff" />
          </button>
          <strong>Novo restaurante</strong>
        </div>
      </header>

      <ul>
        {restaurants.map((restaurant) => (
          <RestaurantCard
            onClick={() => handleSelectRestaurant(restaurant.id)}
            key={restaurant.id}
            status={1}
            name={restaurant.name}
            cnpj={restaurant.cnpj}
            color="red"
          />
        ))}
      </ul>
      <div className="load-more">
        <button type="button" onClick={() => console.log('oi')}>
          Ver mais
        </button>
      </div>
    </Container>
  );
}
