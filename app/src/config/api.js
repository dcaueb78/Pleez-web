import axios from 'axios';

const api = axios.create({
  baseURL: 'https://134.122.126.230:3333'
});

export default api;
