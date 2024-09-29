import {createSlice} from '@reduxjs/toolkit';

const initState = {
  depots: [],
  currentDepot: {},
};

const {reducer, actions} = createSlice({
  name: 'depots',
  initialState: initState,
  reducers: {
    setDepots: (state, {payload}) => {
      state.depots = payload;
    },
    setCurrentDepot: (state, {payload}) => {
      state.currentDepot = payload;
    },
  },
});

export default reducer;

export const {setDepots, setCurrentDepot} = actions;
