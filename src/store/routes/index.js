import {createSlice} from '@reduxjs/toolkit';

const initState = {
  activeRoutes: [],
  completedRoutes: [],
  currentRoute: {},
};

const {reducer, actions} = createSlice({
  name: 'routes',
  initialState: initState,
  reducers: {
    setActiveRoutes: (state, {payload}) => {
      state.activeRoutes = payload.data;
    },
    setCompletedRoutes: (state, {payload}) => {
      state.completedRoutes = payload.data;
    },
    setCurrentRoute: (state, {payload}) => {
      state.currentRoute = payload;
    },
    setRouteStatus: (state, {payload}) => {
      state.currentRoute.status = payload;
    },
  },
});

export default reducer;

export const {
  setActiveRoutes,
  setCompletedRoutes,
  setCurrentRoute,
  setRouteStatus,
} = actions;
