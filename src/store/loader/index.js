import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  globalLoader: false,
  loaders: {},
};

const {reducer, actions} = createSlice({
  name: 'loader',
  initialState: initialState,
  reducers: {
    showGlobalLoader: state => {
      state.globalLoader = true;
    },
    hideGlobalLoader: state => {
      state.globalLoader = false;
    },
    setLoader: (state, {payload}) => {
      state.loaders[payload] = true;
    },
    removeLoader: (state, {payload}) => {
      state.loaders[payload] = false;
    },
  },
});

export default reducer;

export const {showGlobalLoader, hideGlobalLoader, setLoader, removeLoader} =
  actions;
