import axios from 'axios';
import { BASE_URL } from '@/const/api';

const createApi = () => axios.create({
  baseURL: BASE_URL,
  timeout: 50000,
});

const api = createApi();

export default api;
