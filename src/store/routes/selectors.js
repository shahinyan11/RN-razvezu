import {createSelector} from 'reselect';

export const storeSelector = store => store.routes;

export const currentRouteSelector = createSelector(
  storeSelector,
  store => store.currentRoute,
);

export const selectRoutesHistory = createSelector(storeSelector, store =>
  store.routesHistory.reduce((acc, obj) => {
    const key = obj.isCompleted ? 'completedRoutes' : 'activeRoutes';

    if (!acc[key]) {
      acc[key] = [];
    }

    acc[key].push(obj);

    return acc;
  }, {}),
);
