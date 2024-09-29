import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {profileRemoveEndpoint} from '@store/user/endpoints';
import {logoutAction} from '@store/auth/operations';

export default () => async dispatch => {
  const {endpoint, url} = profileRemoveEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.delete(url);

    dispatch(logoutAction());
  } catch (e) {
    console.log('_profileRemoveRequest', e.message);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
