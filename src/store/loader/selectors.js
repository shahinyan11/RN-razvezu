import {createSelector} from 'reselect';

export const selectLoaderStore = store => store.loader;

export const selectGlobalLoader = createSelector(
  selectLoaderStore,
  loaderStore => loaderStore.globalLoader,
);

export const selectLoaders = createSelector(
  selectLoaderStore,
  loaderStore => loaderStore.loaders,
);
