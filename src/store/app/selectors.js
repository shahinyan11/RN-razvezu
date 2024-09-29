import {createSelector} from 'reselect';

export const selectAppStore = store => store.app;

export const selectCities = createSelector(
  selectAppStore,
  appStore => appStore.cities,
);

export const faqSelector = createSelector(
  selectAppStore,
  appStore => appStore.faq,
);
