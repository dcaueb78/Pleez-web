import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { selectRestaurant } from '~/store/modules/account/actions';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

import OrderCard from '~/components/OrderCard';

export default function Dashboard() {
  const dispatch = useDispatch();
  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!restaurantSelected) {
      history.push('/restaurantes');
    }
  }, []);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.post('/restaurant-order', {
        restaurantId: 1,
      });

      setOrders(response.data);
    }
    loadOrders();
  }, []);

  const handleSelectRestaurant = (restaurantId) => {
    dispatch(selectRestaurant(restaurantId));
  };
  return (
    <Container>
      <ul>
        {orders.map((order) => (
          <OrderCard
            onClick={() => handleSelectRestaurant(order._id)}
            key={order._id}
            status={order.status}
            code={order.transaction_id}
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
