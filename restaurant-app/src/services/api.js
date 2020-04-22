import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.api.pleezapp.com',
});

export default api;
