import { axiosInstance } from './config';

import { ELEMENTS } from 'services/api/endpoints';

export const requestElements = () => axiosInstance.get(ELEMENTS);
export const requestElement = id => axiosInstance.get(`${ELEMENTS}/${id}`);
