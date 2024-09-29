import {createSelector} from 'reselect';

export const configsStoreSelector = store => store.configs;

export const baseUrlSelector = createSelector(
  configsStoreSelector,
  store => store.baseUrl,
);
