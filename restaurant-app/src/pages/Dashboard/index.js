import React, { useState, useEffect } from 'react';

import api from '~/services/api';

import { Container } from './styles';

import Card from '~/components/RestaurantCard';

import { MdAdd } from 'react-icons/md';

export default function Dashboard() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    async function loadRestaurants() {
      const response = await api.get('restaurant');

      setRestaurants(response.data);
    }
    loadRestaurants();
  }, []);

  return (
    <Container>
      <header onClick={() => console.log('novo')}>
        <div>
          <button type="button">
            <MdAdd size={44} color="#fff" />
          </button>
          <strong>Novo restaurante</strong>
        </div>
      </header>

      <ul>
        {restaurants.map((restaurant) => (
          <Card key={restaurant.id} status={1} name={restaurant.name} cnpj={restaurant.cnpj} color='red' />
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
