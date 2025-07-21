import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5021/api', // ajuste conforme seu back-end
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

export default api;
