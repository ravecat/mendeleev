import { ELEMENTS } from 'services/api/endpoints';

import { axiosInstance } from './config';

export const requestElements = () => axiosInstance.get(ELEMENTS);
export const requestElement = id => axiosInstance.get(`${ELEMENTS}/${id}`);
