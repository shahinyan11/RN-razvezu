import httpClient from '@httpClient';
import {ROUTES} from '@constants/apiRoutes';
import {setCurrentRoute} from '@store/routes';

export default id => async dispatch => {
  try {
    const {data} = await httpClient.get(`${ROUTES}/${id}`);

    dispatch(setCurrentRoute(data.result));
  } catch (e) {
    console.log('_getRouteByIdRequest', e);
  }
};
