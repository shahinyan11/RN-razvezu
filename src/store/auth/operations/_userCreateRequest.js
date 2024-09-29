import handleFormikResponseError from '@helpers/handleFormikResponseError';
import {PROFILE_USER_CREATE} from '@constants/apiRoutes';
import {navigate} from '@navigation/RootNavigation';
import httpClient from '@httpClient';

export default ({params, formik}) =>
  async () => {
    try {
      await httpClient.post(PROFILE_USER_CREATE, params);

      navigate('CarInfo');
    } catch (e) {
      handleFormikResponseError(e.response, formik);

      console.log('profileCreateLogic', e.message);
    }
  };
