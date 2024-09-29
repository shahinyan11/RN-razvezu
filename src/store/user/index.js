import {createSlice} from '@reduxjs/toolkit';

const initState = {
  user: {},
  stories: [],
};

const {reducer, actions} = createSlice({
  name: 'user',
  initialState: initState,
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
    setUserStatus: (state, {payload}) => {
      state.user.status = payload;
    },
    setStories: (state, {payload}) => {
      state.stories = payload;
    },
    resetUser: () => initState,
  },
});

export default reducer;

export const {setUser, setUserStatus, resetUser, setStories} = actions;
