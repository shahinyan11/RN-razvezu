import {createSelector} from 'reselect';

export const selectAuthStore = store => store.auth;

export const selectAuthToken = createSelector(
  selectAuthStore,
  authStore => authStore.token,
);
