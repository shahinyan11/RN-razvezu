import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  cameraAsked: false,
  fileAsked: false,
};

const {reducer, actions} = createSlice({
  name: 'permission',
  initialState: initialState,
  reducers: {
    setCameraAsked: (state, {payload}) => {
      state.cameraAsked = payload;
    },
    setFileAsked: (state, {payload}) => {
      state.fileAsked = payload;
    },
  },
});

export default reducer;

export const {setCameraAsked, setFileAsked} = actions;
