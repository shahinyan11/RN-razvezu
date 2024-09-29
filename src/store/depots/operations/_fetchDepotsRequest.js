import httpClient from '@httpClient';
import {DEPOTS_INFO} from '@constants/apiRoutes';
import {setDepots} from '@store/depots';

export default () => async dispatch => {
  try {
    const {data} = await httpClient.get(DEPOTS_INFO);

    dispatch(setDepots(data.result));
  } catch (e) {
    console.log('fetchChatsLogic', e.message);
  }
};
