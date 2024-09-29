import httpClient from '@httpClient';
import {ROUTES_INFO} from '@constants/apiRoutes';
import {setRoutes} from '@store/depots';

export default params => async dispatch => {
  try {
    const {data} = await httpClient.post(ROUTES_INFO, params);

    dispatch(setRoutes(data.result));
  } catch (e) {
    console.log('routesInfoLogic', e.message);
  }
};
