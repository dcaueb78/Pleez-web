import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';
import OrderCard from '~/components/OrderCard';

export default function Dashboard() {
  const restaurantSelected = useSelector((state) => state.account.restaurant);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!restaurantSelected) {
      history.push('/restaurantes');
    }
  }, []);

  const loadOrders = async () => {
    const response = await api.post('/restaurant-order', {
      restaurantId: 1,
    });

    setOrders(response.data);
  };

  useEffect(() => {
    loadOrders();
  }, []);

  const handleSelectOrder = async (orderId, status) => {
    const newStatus = status + 1 > 2 ? status : status + 1;
    await api.patch('/order', {
      orderId,
      status: newStatus,
    });
    loadOrders();
  };

  return (
    <Container>
      <div className="flex center">
        <h1>Lista de pedidos</h1>
      </div>
      <ul>
        {orders.map((order) => (
          <OrderCard
            onClick={() => handleSelectOrder(order._id, order.status)}
            totalPrice={order.total_price}
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
