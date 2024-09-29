import {createSelector} from 'reselect';

export const selectChatStore = store => store.chat;

export const selectChats = createSelector(
  selectChatStore,
  store => store.chats,
);

export const selectCurrentChat = createSelector(
  selectChatStore,
  store => store.currentChat,
);
