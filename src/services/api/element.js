import { ENDPOINTS } from 'common/endpoints';
import { axiosInstance } from './config';

export const fetchElements = () => axiosInstance.get(ENDPOINTS.ELEMENTS);
