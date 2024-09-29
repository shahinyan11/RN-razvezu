import {createSelector} from 'reselect';

export const storeSelector = store => store.locations;

export const currentLocationSelector = createSelector(
  storeSelector,
  store => store.currentLocation,
);

export const cancelReasonsSelector = createSelector(
  storeSelector,
  store => store.cancelReasons,
);
