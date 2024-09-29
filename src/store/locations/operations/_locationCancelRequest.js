import {removeLoader, setLoader} from '@store/loader';
import {locationCancelEndpoint} from '../endpoints';
import httpClient from '@httpClient';
import {navigate} from '@navigation/RootNavigation';

export default params => async (dispatch, getState) => {
  const {endpoint, url} = locationCancelEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.post(url, params);

    const {route_id} = getState().routes.currentRoute;
    navigate('RouteDetails', {id: route_id});
  } catch (e) {
    console.log('_locationCancelRequest');
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
