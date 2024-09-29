import httpClient from '@httpClient';
import {CHATS} from '@constants/apiRoutes';
import {setChats} from '@store/chat';

export default () => async dispatch => {
  try {
    const {data} = await httpClient.get(CHATS);

    dispatch(setChats(data.result.chats));
  } catch (e) {
    console.log('fetchChatsLogic', e.message);
  }
};
