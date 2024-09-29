import httpClient from '@httpClient';
import {AUTH_ME} from '@constants/apiRoutes';
import {setUser} from '@store/user';
import LogRocket from '@logrocket/react-native';

export default () => async dispatch => {
  try {
    const {data} = await httpClient.get(AUTH_ME);
    dispatch(setUser(data.result));
    console.log('userInfoLogic', data.result);
    logRocketAuth(data.result);
  } catch (e) {
    console.log('userInfoLogic', e.message);
  }
};

const logRocketAuth = data => {
  if (data.is_logger) {
    LogRocket.init('prsc0c/razvezu');
    if (data.id) {
      LogRocket.identify(String(data.id), {
        name: String(data.name),
        email: String(data.email),
        phone: String(data.phone),
      });
    }
  }
};
