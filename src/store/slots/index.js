import {createSlice} from '@reduxjs/toolkit';

const initState = {
  slotGroups: [],
};

const {reducer, actions} = createSlice({
  name: 'slots',
  initialState: initState,
  reducers: {
    setSlotGroups: (state, {payload}) => {
      state.slotGroups = payload;
    },
  },
});

export default reducer;

export const {setSlotGroups} = actions;
