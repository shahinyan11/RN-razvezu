import {createSelector} from 'reselect';

export const selectUserStore = store => store.user;

export const userSelector = createSelector(
  selectUserStore,
  store => store.user,
);

export const selectUserStatus = createSelector(
  selectUserStore,
  store => store.user.status,
);

export const selectUserId = createSelector(
  selectUserStore,
  store => store.user.id,
);

export const storiesSelector = createSelector(
  selectUserStore,
  appStore => appStore.stories,
);
