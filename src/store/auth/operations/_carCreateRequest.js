import handleFormikResponseError from '@helpers/handleFormikResponseError';
import {PROFILE_CAR_CREATE} from '@constants/apiRoutes';
import {USER_STATUS} from '@constants/user';
import {setUserStatus} from '@store/user';
import httpClient from '@httpClient';

export default ({params, formik}) =>
  async dispatch => {
    try {
      await httpClient.post(PROFILE_CAR_CREATE, params);

      dispatch(setUserStatus(USER_STATUS.TEXT_DOCS_IN_VERIFICATION));
    } catch (e) {
      handleFormikResponseError(e.response, formik);

      console.log('profileCreateLogic', e.message);
    }
  };
