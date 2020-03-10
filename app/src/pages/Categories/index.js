import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { MdArrowBack } from 'react-icons/md';

import { Wrapper, Content, Scroll } from './styles';
import FoodCard from '~/components/FoodCard';
import CartFooter from '~/components/CartFooter';

import { useChairNumber, useRestaurantId } from '~/store/hooks/basket';
import { addChair, addRestaurant } from '~/store/modules/basket/actions';
import api from '~/config/api';
import history from '~/services/history';

import { base, paymentHistory } from '~/services/api/pages';

import {
  restaurantDetails,
  categoriesFromRestaurantId
} from '~/services/api/endPoints';

import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';

export default function Categories({ match }) {
  const { restaurant, chair } = match.params;
  const chairNumberExists = useChairNumber();
  const restaurantIdExists = useRestaurantId();

  const dispatch = useDispatch();

  useEffect(() => {
    function validateChairExists() {
      if (!chairNumberExists || chair !== chairNumberExists) {
        dispatch(addChair({ chair }));
      }
    }

    function validateRestaurantExists() {
      if (!restaurantIdExists || restaurant !== restaurantIdExists) {
        dispatch(addRestaurant({ restaurant }));
      }
    }

    validateChairExists();
    validateRestaurantExists();
  }, [chair, chairNumberExists, dispatch, restaurant, restaurantIdExists]);

  const [restaurantName, setRestaurantName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function findAllCategoriesFromSelectedRestaurant(restaurant_id) {
      const response = await api.get(categoriesFromRestaurantId(restaurant_id));
      setCategories(response.data);
    }

    findAllCategoriesFromSelectedRestaurant(restaurant);
  }, [restaurant]);

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
        <img src={logo} alt="Pleez" />
        <button type="button" onClick={() => history.push(paymentHistory)}>
          <MdArrowBack size={32} color="white" />
        </button>
        <Scroll>
          {/* <h1>{restaurantName}</h1> */}
          <img src={unclejoe} alt="Restaurante" />
          <h2>Categorias</h2>
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
            <div />
          )}
        </Scroll>
      </Content>
      <CartFooter />
    </Wrapper>
  );
}
