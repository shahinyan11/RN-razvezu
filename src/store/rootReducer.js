import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';

import appReducer from './app';
import authReducer from './auth';
import modalReducer from './modal';
import loaderReducer from './loader';
import userReducer from './user';
import chatReducer from './chat';
import depotsReducer from './depots';
import routesReducer from './routes';
import walletReducer from './wallet';
import verificationReducer from './verification';
import permissionReducer from './permission';
import slotsReducer from './slots';
import locationsReducer from './locations';
import configsReducer from './configs';

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  modal: modalReducer,
  loader: loaderReducer,
  user: userReducer,
  chat: chatReducer,
  depots: depotsReducer,
  routes: routesReducer,
  wallet: walletReducer,
  verification: verificationReducer,
  permission: permissionReducer,
  slots: slotsReducer,
  locations: locationsReducer,
  configs: configsReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth', 'verification', 'permission', 'configs'],
};

export default persistReducer(persistConfig, rootReducer);
