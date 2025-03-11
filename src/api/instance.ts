import axios, { type AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://cloud.codesupply.co/endpoint/react/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default api;