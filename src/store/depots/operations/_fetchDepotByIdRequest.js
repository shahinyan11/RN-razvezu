import httpClient from '@httpClient';
import {DEPOTS_INFO} from '@constants/apiRoutes';
import {setCurrentDepot} from '@store/depots';

export default params => async dispatch => {
  try {
    const {data} = await httpClient.post(DEPOTS_INFO, params);

    dispatch(setCurrentDepot(data.result));
  } catch (e) {
    console.log('fetchDepotByIdLogic', e.message);
  }
};
