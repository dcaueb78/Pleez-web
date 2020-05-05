import React from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { store } from '~/store';
import * as actions from '~/store/modules/auth/actions';

const api = axios.create({
  baseURL: 'https://www.api.pleezapp.com'
});

api.interceptors.response.use(
  response => response,
  error => {
    if (401 === error?.response?.status) {
    toast.error('Sua sessão expirou! Poderia logar novamente? :(');
    store.dispatch(actions.signOut());
    } else {
    return error;
  }
  }
);

export default api;
