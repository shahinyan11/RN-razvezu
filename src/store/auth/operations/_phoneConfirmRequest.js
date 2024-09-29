import {AUTH_PHONE_CONFIRM_CODE} from '@constants/apiRoutes';
import httpClient from '@httpClient';
import {hideGlobalLoader, showGlobalLoader} from '@store/loader';
import {setToken} from '@store/auth';
import {setUserStatus} from '@store/user';
import {
  setConfigBackgroundGeolocation,
  startRouteTracking,
} from '@hooks/useGgeolocationTracking';

export default params => async (dispatch, getState) => {
  try {
    dispatch(showGlobalLoader());

    const {fcm_token} = getState().app;
    params.fcm_token = fcm_token;

    const {data} = await httpClient.post(AUTH_PHONE_CONFIRM_CODE, params);

    setConfigBackgroundGeolocation(data.result.token, data.result.is_admin);
    startRouteTracking(data.result.route_start || false);

    dispatch(setUserStatus(data.result.status));
    dispatch(setToken(data.result.token));
  } catch (e) {
    console.log('_phoneConfirmRequest', e.message);
  } finally {
    dispatch(hideGlobalLoader());
  }
};