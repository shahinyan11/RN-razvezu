import httpClient from '@httpClient';
import {CHATS} from '@constants/apiRoutes';
import {setCurrentChat} from '@store/chat';

export default chat_id => async dispatch => {
  try {
    const {data} = await httpClient.get(`${CHATS}/${chat_id}`);

    dispatch(setCurrentChat(data.result));
  } catch (e) {
    console.log('fetchChatByIdLogic', e.message);
  }
};
