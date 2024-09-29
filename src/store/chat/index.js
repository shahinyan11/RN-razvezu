import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  chats: [],
  currentChat: {
    data: [],
  },
};

const {reducer, actions} = createSlice({
  name: 'chat',
  initialState: initialState,
  reducers: {
    setChats: (state, {payload}) => {
      state.chats = payload;
    },
    setCurrentChat: (state, {payload}) => {
      state.currentChat = payload;
    },
    setCurrentChatData: (state, {payload}) => {
      const {currentChat} = state;
      currentChat.data = [...payload];
      state.currentChat = {...currentChat};
    },
  },
});

export default reducer;

export const {setChats, setCurrentChat, setCurrentChatData} = actions;
