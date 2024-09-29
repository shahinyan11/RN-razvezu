import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  modal: {
    type: null,
    data: {},
  },
  bottomSheet: {
    type: null,
    data: {},
  },
};

const {reducer, actions} = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    showModal: (state, {payload}) => {
      state.modal.type = payload.type;
      state.modal.data = payload.data || {};
    },
    hideModal: () => ({
      modal: {type: null, data: {}},
    }),

    openBottomSheet: (state, {payload}) => {
      state.bottomSheet.type = payload.type;
      state.bottomSheet.data = payload.data || {};
    },
    closeBottomSheet: () => ({
      bottomSheet: {type: null, data: {}},
    }),
  },
});

export default reducer;

export const {showModal, hideModal, openBottomSheet, closeBottomSheet} =
  actions;
