import {createSelector} from 'reselect';

export const storeSelector = store => store.modal;

export const bottomSheetSelector = createSelector(
  storeSelector,
  store => store.bottomSheet,
);
