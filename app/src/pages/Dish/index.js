import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';
import { MdArrowBack, MdReorder } from 'react-icons/md';

import { Wrapper, Content, Scroll } from './styles';
import FoodCard from '~/components/FoodCard';
import CartFooter from '~/components/CartFooter';

import api from '~/config/api';
import history from '~/services/history';

import { base, orderHistoryRoute } from '~/services/api/pages';

import {
  allDishesFromCategoryId,
  restaurantDetails
} from '~/services/api/endPoints';

import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';

export default function Categories({ match }) {
  const { restaurant, category } = match.params;

  const [restaurantName, setRestaurantName] = useState('');
  const [dishes, setdishes] = useState([]);
  const [categoryDetails, setCategoryDetails] = useState();

  useEffect(() => {
    const loadCategoryDetails = async () => {
      const response = await api.get(`/category/details/${category}`);
      setCategoryDetails(response.data);
    };

    loadCategoryDetails();
  }, [category]);

  useEffect(() => {
    async function findAllDishesFromSelectedCategory(category_id) {
      const response = await api.get(allDishesFromCategoryId(category_id));
      setdishes(response.data);
    }

    findAllDishesFromSelectedCategory(category);
  }, [category]);

  useEffect(() => {
    async function shouldRestaurantExists(restaurant_id) {
      try {
        const response = await api.get(restaurantDetails(restaurant_id));
        setRestaurantName(response.data.name);
      } catch (err) {
        toast.error(
          'Não consegui achar o restaurante :( Poderia tentar mais uma vez?'
        );
        history.push(base);
      }
    }

    shouldRestaurantExists(restaurant);
  }, [restaurant]);

  return (
    <Wrapper>
      <Content>
        <button type="button" onClick={history.goBack}>
          <MdArrowBack size={32} color="white" />
        </button>
        <img src={logo} alt="Pleez" />
        <button type="button" onClick={() => history.push(orderHistoryRoute)}>
          <MdReorder size={32} color="white" />
        </button>
        <Scroll>
          <h1 className="page-restaurant-selected-title">{restaurantName}</h1>
          {/* <img src={unclejoe} alt="Restaurante" /> */}
          <h2 className="page-description">{categoryDetails?.name ? categoryDetails.name : 'Carregando...'}</h2>
          <h2 className="page-description-title">Pratos:</h2>
          {dishes.length > 0 ? (
            <>
              {dishes.map(dish => (
                <FoodCard
                  key={dish.id}
                  name={dish.name}
                  alt={dish.name}
                  redirect={`/detalhes/${restaurant}/${dish.id}`}
                />
              ))}
            </>
          ) : (
            <div />
          )}
        </Scroll>
      </Content>
      <CartFooter />
    </Wrapper>
  );
}
