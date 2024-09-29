import {createSlice} from '@reduxjs/toolkit';

import {PAGINATION} from '@constants/pagination';

const initialState = {
  sms_hash: null,
  fcm_token: null,
  cities: [],
  citiesPagination: PAGINATION,
  geolocationEnabled: false,
  faq: [],
};

const {reducer, actions} = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setSmsHash: (state, {payload}) => {
      state.sms_hash = payload;
    },
    setCities: (state, {payload}) => {
      state.cities = [...state.cities, ...payload.data];
      state.citiesPagination.page = payload.pagination.current_page + 1;
      state.citiesPagination.last_page = payload.pagination.last_page;
    },
    resetCities: state => {
      state.cities = [];
      state.citiesPagination = PAGINATION;
    },
    setFcmToken: (state, {payload}) => {
      state.fcm_token = payload;
    },
    setGeolocationEnabled: (state, {payload}) => {
      state.geolocationEnabled = payload;
    },
    setFaq: (state, {payload}) => {
      state.faq = payload;
    },
  },
});

export const {
  setSmsHash,
  setCities,
  resetCities,
  setFcmToken,
  setGeolocationEnabled,
  setFaq,
} = actions;

export default reducer;
