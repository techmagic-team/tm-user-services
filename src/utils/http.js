import axios from 'axios';

import store from './../store';

const http = axios.create({
  baseURL: 'https://tm-subscriptions-manager.firebaseio.com',
});

// Add a request interceptor
http.interceptors.request.use((config) => {
  const newConfig = { ...config };
  const token = localStorage.getItem('token');

  if (!config.url.includes('verifyPassword')) {
    newConfig.url += `?auth=${token}`;
  }

  return newConfig;
});

// Add a response interceptor
http.interceptors.response.use(response => response, (error) => {
  if (error.response.status === 401) {
    localStorage.removeItem('token');
    window.location.href = '';
  }

  store.dispatch('shared/setNotification', {
    message: error.response.data.error.message,
    color: 'error',
  });
});

export default http;
