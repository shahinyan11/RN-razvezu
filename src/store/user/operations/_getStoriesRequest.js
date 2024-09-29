import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {getStoriesEndpoint} from '../endpoints';
import {setStories} from '@store/user';

export default () => async dispatch => {
  const {endpoint, url} = getStoriesEndpoint;
  dispatch(setLoader(endpoint));

  try {
    const {data} = await httpClient.get(url);

    dispatch(setStories(data.result));
  } catch (e) {
    console.log('Error: getStoriesRequest', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
