import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {storySeenEndpoint} from '../endpoints';

export default story_id => async dispatch => {
  const {endpoint, url} = storySeenEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.post(url, {story_id});
  } catch (e) {
    console.log('Error: _storySeenRequest', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
