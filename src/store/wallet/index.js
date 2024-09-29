import {createSlice} from '@reduxjs/toolkit';
import {PAGINATION} from '@constants/pagination';

const initState = {
  walletInfo: {},
  transactions: [],
  transPagination: PAGINATION,
};

const {reducer, actions} = createSlice({
  name: 'wallet',
  initialState: initState,
  reducers: {
    setWalletInfo: (state, {payload}) => {
      state.walletInfo = payload;
    },
    setTransactions: (state, {payload}) => {
      state.transactions = payload.data;
      state.transPagination.page = payload.pagination.current_page + 1;
      state.transPagination.last_page = payload.pagination.last_page;
    },
    reduceBalance: (state, {payload}) => {
      state.walletInfo.balance -= payload;
    },
  },
});

export default reducer;

export const {setWalletInfo, setTransactions, reduceBalance} = actions;
