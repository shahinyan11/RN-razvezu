import {createSlice} from '@reduxjs/toolkit';
import {BASE_URL} from '@constants/index';

const initialState = {
  baseUrl: BASE_URL,
};

const {reducer, actions} = createSlice({
  name: 'configs',
  initialState: initialState,
  reducers: {
    setBaseUrl: (state, {payload}) => {
      state.baseUrl = payload;
    },
  },
});

export const {setBaseUrl} = actions;

export default reducer;
