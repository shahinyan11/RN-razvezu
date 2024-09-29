import {createSlice} from '@reduxjs/toolkit';

const initState = {
  currentLocation: {},
  cancelReasons: [],
};

const {reducer, actions} = createSlice({
  name: 'locations',
  initialState: initState,
  reducers: {
    setCurrentLocation: (state, {payload}) => {
      state.currentLocation = payload;
    },
    updateLocation: (state, {payload: {key, value}}) => {
      state.currentLocation[key] = value;
    },
    setLocationPhoto: (state, {payload}) => {
      state.currentLocation.photo = payload;
    },
    setCancelReasons: (state, {payload}) => {
      state.cancelReasons = payload;
    },
  },
});

export default reducer;

export const {
  setCurrentLocation,
  setLocationPhoto,
  setCancelReasons,
  updateLocation,
} = actions;
