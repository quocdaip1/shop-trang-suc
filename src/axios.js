import axios from 'axios';
import { config } from './utils';

const myAxios = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default myAxios;