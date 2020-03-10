import React, { useState, useEffect } from 'react';

import { MdArrowBack } from 'react-icons/md';

import { orderPage } from '~/services/api/endPoints';

import api from '~/config/api';
import history from '~/services/history';

import { getStatusDescription, getColorStatusList } from '~/utils/orderStatus';

import 'react-credit-cards/es/styles-compiled.css';

import { Wrapper, Content, Scroll } from './styles';
import BasketContent from '~/components/AccountInfosContent';

import logo from '~/assets/logo.png';
import cartHistoryIcon from '~/assets/icons/CartHistory.svg';

export default function PaymentHistory() {
  const [orders, setOrders] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadOrders() {
      const response = await api.get(orderPage(page));
      setOrders(response.data);
    }

    loadOrders();
  }, [page]);

  return (
    <Wrapper>
      <Content>
        <button type="button" onClick={history.goBack}>
          <MdArrowBack size={32} color="white" />
        </button>
        <img src={logo} alt="Pleez" />
      </Content>
      <BasketContent>
        <header>
          <div>
            <img src={cartHistoryIcon} alt="Cart" />
            <h1>Meus pedidos</h1>
          </div>
        </header>
        <Scroll>
          {orders.map(order => (
            <div key={order._id}>
              <p>{`#${order.transaction_id}`}</p>
              <div>{getStatusDescription(order.status)}</div>
              <div className={getColorStatusList(order.status)} />
            </div>
          ))}
        </Scroll>
      </BasketContent>
    </Wrapper>
  );
}
