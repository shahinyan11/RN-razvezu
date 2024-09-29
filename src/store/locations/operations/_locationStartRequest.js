import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {updateLocation} from '@store/locations';
import {locationStartEndpoint} from '../endpoints';

export default params => async dispatch => {
  const {endpoint, url} = locationStartEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.post(url, params);

    dispatch(updateLocation({key: 'is_started', value: true}));
  } catch (e) {
    console.log('_locationStartRequest');
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
