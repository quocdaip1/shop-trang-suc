import axios from 'axios';
import { config } from './utils';

const myAxios = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});


const loadingPage = () => {
  window.location.reload();
}

export {myAxios,loadingPage};