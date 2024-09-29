import httpClient from '@httpClient';
import {CHATS_SEND} from '@constants/apiRoutes';
import {setCurrentChatData} from '@store/chat';

export default newMessage => async (dispatch, getState) => {
  try {
    const messages = [...getState().chat?.currentChat.data];
    messages.push(newMessage);

    dispatch(setCurrentChatData(messages));

    const {data} = await httpClient.post(CHATS_SEND, newMessage);

    messages[messages.length - 1] = data.result;
    dispatch(setCurrentChatData(messages));
  } catch (e) {
    console.log('sendMessageRequest', e.message);
  }
};
