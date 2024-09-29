import {createSelector} from 'reselect';

export const selectWalletStore = store => store.wallet;

export const walletInfoSelector = createSelector(
  selectWalletStore,
  store => store.walletInfo,
);

export const transactionsSelector = createSelector(
  selectWalletStore,
  store => store.transactions,
);
