import {createSlice} from '@reduxjs/toolkit';

const initState = {
  last_send: undefined,
  interval: 0,
  token: '',
};

const {reducer, actions} = createSlice({
  name: 'auth',
  initialState: initState,
  reducers: {
    setStartData: (state, {payload}) => {
      state.last_send = payload.last_send;
      state.interval = payload.interval;
    },
    setToken: (state, {payload}) => {
      state.token = payload;
    },
    resetAuth: () => initState,
  },
});

export default reducer;

export const {setStartData, setToken, resetAuth} = actions;
