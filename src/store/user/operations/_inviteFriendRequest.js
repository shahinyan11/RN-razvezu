import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {inviteFriendEndpoint} from '../endpoints';
import {navigate} from '@navigation/RootNavigation';

export default params => async dispatch => {
  let success = true;

  const {endpoint, url} = inviteFriendEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.post(url, params);

    navigate();
  } catch (e) {
    success = false;
    console.log('Error: inviteFriendRequest', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }

  return success;
};
