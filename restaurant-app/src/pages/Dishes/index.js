import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import DishCard from '~/components/DishCard';
import ButtonNew from '~/components/ButtonNew';

export default function Dishes({ match }) {
  const { category_id } = match.params;

  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const [dishes, setDishes] = useState([]);

  useEffect(() => {
    if (!restaurantSelected) {
      history.push('/restaurantes');
    }
  }, []);

  const loadDishes = async () => {
    const response = await api.get(`/dish/${category_id}`);

    setDishes(response.data);
  };

  useEffect(() => {
    loadDishes();
  }, []);

  const handleCreateNewDish = () => {
    history.push(`/criar-prato/${category_id}`);
  };

  return (
    <Container>
      <div className="flex center">
        <h1>Lista de Pratos</h1>
      </div>
      <ButtonNew text="Novo Prato" handler={handleCreateNewDish} />
      <ul>
        {dishes.map((dish) => (
          <DishCard
            name={dish.name}
            key={dish.id}
            deleteFunction={() => console.log('deletei')}
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
