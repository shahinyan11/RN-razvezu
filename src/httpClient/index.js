import Axios from 'axios';
import Toast from 'react-native-toast-message';

import {BASE_URL} from '../constants';
import {logoutAction} from '@store/auth/operations';

const httpClient = Axios.create({
  baseURL: BASE_URL,
});

export const axiosMiddleware =
  ({getState, dispatch}) =>
  next =>
  action => {
    httpClient.interceptors.request.use(
      config => {
        const state = getState();
        const token = state.auth.token;
        const {baseUrl} = state.configs;

        if (baseUrl) {
          config.baseURL = baseUrl;
        }

        if (!config.headers.Authorization) {
          config.headers.Authorization = token ? `Bearer ${token}` : '';
        }

        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );

    httpClient.interceptors.response.use(
      response => {
        const message = response?.data?.message;

        if (message) {
          Toast.show({type: 'success', text1: message});
        }

        return response;
      },
      error => {
        const {data, status} = error?.response;
        const {message} = data;

        if (+status === 401) {
          dispatch(logoutAction());

          return;
        }

        if (message) {
          Toast.show({type: 'error', text1: message});
        }

        return Promise.reject(error);
      },
    );

    next(action);
  };

export default httpClient;
