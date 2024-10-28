import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // Insira aqui a URL do seu backend
});

export default api;
