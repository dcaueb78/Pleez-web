import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { toast } from 'react-toastify';

import { MdReorder } from 'react-icons/md';

import { Wrapper, Content, Scroll } from './styles';
import CartFooter from '~/components/CartFooter';
import CategoriesCards from './components/CategoriesCards';
import OfflineRestaurant from './components/OfflineRestaurant';

import { useChairNumber, useRestaurantId } from '~/store/hooks/basket';
import { addChair, addRestaurant } from '~/store/modules/basket/actions';
import api from '~/config/api';
import history from '~/services/history';

import { base, orderHistoryRoute } from '~/services/api/pages';

import { restaurantDetails } from '~/services/api/endPoints';

import logo from '~/assets/logo.png';
import unclejoe from '~/assets/unclejoe.png';

export default function Categories({ match }) {
  const { restaurant, chair } = match.params;
  const chairNumberExists = useChairNumber();
  const restaurantIdExists = useRestaurantId();
  const [restaurantStatus, SetRestaurantStatus] = useState();
  const [restaurantName, setRestaurantName] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    async function loadRestaurantStatus() {
      const response = await api.get(`/restaurant-status/${restaurant}`);
      const apiRestaurantStatus = response.data;
      SetRestaurantStatus(apiRestaurantStatus);
    }

    loadRestaurantStatus();
  }, []);

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
        <button type="button" onClick={() => history.push(orderHistoryRoute)}>
          <MdReorder size={32} color="white" />
        </button>
        <Scroll>
          <h1 className="page-selected-title">{restaurantName}</h1>
          {/* <img src={unclejoe} alt="Restaurante" /> */}
          <h2 className="page-description-title">Categorias</h2>
          {restaurantStatus === 0 ? (
            <OfflineRestaurant />
          ) : (
            <CategoriesCards restaurant={restaurant} />
          )}
        </Scroll>
      </Content>
      <CartFooter />
    </Wrapper>
  );
}
