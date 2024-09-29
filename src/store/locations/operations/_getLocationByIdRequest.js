import httpClient from '@httpClient';
import {setCurrentLocation} from '@store/locations';
import {getLocationByIdEndpoint} from '../endpoints';
import {removeLoader, setLoader} from '@store/loader';

export default id => async dispatch => {
  const {endpoint, url} = getLocationByIdEndpoint(id);
  dispatch(setLoader(endpoint));

  try {
    const {data} = await httpClient.get(url);

    dispatch(setCurrentLocation(data.result));
  } catch (e) {
    console.log('_getLocationByIdRequest', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
