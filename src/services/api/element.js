import { axiosInstance } from './config/config';
import { API_URL  } from './config/constants';

export const fetchElements = () => {
  return axiosInstance.get(API_URL.ELEMENTS, { mode: 'no-cors' });
};
