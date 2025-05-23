import { API_URL } from '@/config';
import axiosBase from 'axios';

const axios = axiosBase.create({
  baseURL: API_URL,
});

export const getAllApartments = () => {
  // TO BE CHANGED
  return axios.get('/companies');
};
