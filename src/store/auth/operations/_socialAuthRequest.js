import {AUTH_SOCIAL} from '@constants/apiRoutes';
import {setToken} from '@store/auth';
import httpClient from '@httpClient';
import {setUserStatus} from '@store/user';

export default ({provider = 'google', token}) =>
  async dispatch => {
    try {
      const {data} = await httpClient.post(AUTH_SOCIAL, {provider, token});

      dispatch(setToken(data.result.token));
      dispatch(setUserStatus(data.result.status));
    } catch (e) {
      console.log('socialAuthRequest', e.message);
    }
  };
