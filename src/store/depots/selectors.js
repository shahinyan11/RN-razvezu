import {createSelector} from 'reselect';
import {DEPOT_STATUSES} from '@constants/status';

export const selectDepotsStore = store => store.depots;

export const selectDepots = createSelector(
  selectDepotsStore,
  store => store.depots,
);

export const selectAvailableDepots = createSelector(selectDepotsStore, store =>
  store.depots.filter(item => +item.status === DEPOT_STATUSES.CONFIRMED),
);
