import { ENDPOINTS } from 'common/endpoints';
import { axiosInstance } from './config';

export const requestElements = () => axiosInstance.get(ENDPOINTS.ELEMENTS);
