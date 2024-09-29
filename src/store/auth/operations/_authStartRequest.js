import {Platform} from 'react-native';

import handleFormikResponseError from '@helpers/handleFormikResponseError';
import {navigate} from '@navigation/RootNavigation';
import {AUTH_START} from '@constants/apiRoutes';
import {setStartData} from '@store/auth';
import httpClient from '@httpClient';

export default ({params, formik}) =>
  async (dispatch, getState) => {
    try {
      const {sms_has, fcm_token} = getState().app;

      const {data} = await httpClient.post(AUTH_START, {
        sms_has,
        fcm_token,
        system: Platform,
        phone: params.phone.unMasked,
      });

      navigate('PhoneVerification', params);
      dispatch(setStartData(data.result));
    } catch (e) {
      handleFormikResponseError(e.response, formik);

      console.log('authStartLogic', e.message);
    }
  };
