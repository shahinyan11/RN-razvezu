import httpClient from '@httpClient';
import {navigate} from '@navigation/RootNavigation';
import {removeLoader, setLoader} from '@store/loader';
import appendFormData from '@utils/appendFormData';
import {locationConfirmEndpoint} from '../endpoints';

export default params => async (dispatch, getState) => {
  const {endpoint, url} = locationConfirmEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.post(url, appendFormData(params), {
      headers: {'Content-Type': 'multipart/form-data'},
    });

    const {route_id} = getState().routes.currentRoute;
    navigate('RouteDetails', {id: route_id});
  } catch (e) {
    console.log('_locationConfirmRequest');
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
