import httpClient from '@httpClient';
import {ROUTES_START} from '@constants/apiRoutes';

export default params => async () => {
  try {
    await httpClient.post(ROUTES_START, params);
  } catch (e) {
    console.log('routesStartLogic', e.message);
  }
};
