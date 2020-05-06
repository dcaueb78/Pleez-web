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
    if (error?.response?.status === 401) {
    toast.error('Sua sessão expirou! Poderia logar novamente? :(');
    store.dispatch(actions.signOut());
    } else {
    return error;
  }
  }
);

export default api;
