import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import CategoryCard from '~/components/CategoryCard';
import ButtonNew from '~/components/ButtonNew';

export default function Categories() {
  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (!restaurantSelected) {
      history.push('/restaurantes');
    }
  }, []);

  const loadOrders = async () => {
    const response = await api.get(`/category/${restaurantSelected}`);

    setCategories(response.data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleCreateNewCategory = () => {
    history.push('/criar-categoria');
  };

  return (
    <Container>
      <div className="flex center">
        <h1>Lista de Categorias</h1>
      </div>
      <ButtonNew text="Nova Categoria" handler={handleCreateNewCategory} />
      <ul>
        {categories.map((category) => (
          <CategoryCard name={category.name} key={category.id} deleteFunction={() => console.log('deletei')} />
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
