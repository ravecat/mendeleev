import axios from 'axios';

import { API_URL } from 'common/config';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});
