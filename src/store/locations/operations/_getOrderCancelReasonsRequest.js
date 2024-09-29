import {getOrderCancelReasonsEndpoint} from '../endpoints';
import {removeLoader, setLoader} from '@store/loader';
import {setCancelReasons} from '@store/locations';
import httpClient from '@httpClient';

export default () => async dispatch => {
  const {endpoint, url} = getOrderCancelReasonsEndpoint;
  dispatch(setLoader(endpoint));

  try {
    const {data} = await httpClient.get(url);

    dispatch(setCancelReasons(data.result));
  } catch (e) {
    console.log('_getOrderCancelReasonsEndpoint', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
