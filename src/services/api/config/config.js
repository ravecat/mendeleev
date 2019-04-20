import axios from 'axios';
import { API_URL, API_PORT, API_PATH } from 'common/config';

export const axiosInstance = axios.create({
  baseURL: `http://${API_URL}:${API_PORT}/${API_PATH}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
