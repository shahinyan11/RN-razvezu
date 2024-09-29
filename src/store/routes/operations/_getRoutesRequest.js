import httpClient from '@httpClient';
import {ROUTES} from '@constants/apiRoutes';
import {setActiveRoutes, setCompletedRoutes} from '@store/routes';

export default params => async dispatch => {
  try {
    const {data} = await httpClient.get(ROUTES, {params});

    if (params.active) {
      dispatch(setActiveRoutes(data.result));
    }

    if (params.completed) {
      dispatch(setCompletedRoutes(data.result));
    }
  } catch (e) {
    console.log('_getRoutesRequest', e);
  }
};
