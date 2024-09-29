import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {getFaqEndpoint} from '../endpoints';
import {setFaq} from '@store/app';

export default () => async dispatch => {
  const {endpoint, url} = getFaqEndpoint;
  dispatch(setLoader(endpoint));

  try {
    const {data} = await httpClient.get(url);

    dispatch(setFaq(data.result));
  } catch (e) {
    console.log('Error: getFaqRequest', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
