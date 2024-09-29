import {composeWithDevTools} from '@redux-devtools/extension';
import {configureStore} from '@reduxjs/toolkit';

import {axiosMiddleware} from '@httpClient';
import rootReducer from './rootReducer';
import {persistStore} from 'redux-persist';

const enhancer = composeWithDevTools(axiosMiddleware);

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(enhancer),
});

export const persistor = persistStore(store);

export default store;
