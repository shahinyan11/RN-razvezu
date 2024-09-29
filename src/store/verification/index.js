import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  passportPhotos: {},
  driverLicensePhotos: {},
  carDocPhotos: {},
  carPhotos: {},
};

const {reducer, actions} = createSlice({
  name: 'verification',
  initialState: initialState,
  reducers: {
    setPassportPhotos: (state, {payload}) => {
      state.passportPhotos = payload;
    },
    setDriverLicensePhotos: (state, {payload}) => {
      state.driverLicensePhotos = payload;
    },
    setCarDocPhotos: (state, {payload}) => {
      state.carDocPhotos = payload;
    },
    setCarPhotos: (state, {payload}) => {
      state.carPhotos = payload;
    },
  },
});

export default reducer;

export const {
  setPassportPhotos,
  setDriverLicensePhotos,
  setCarDocPhotos,
  setCarPhotos,
} = actions;
