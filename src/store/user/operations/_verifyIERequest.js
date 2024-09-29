import handleFormikResponseError from '@helpers/handleFormikResponseError';
import {USER_STATUS} from '@constants/user';
import {setUserStatus} from '@store/user';
import httpClient from '@httpClient';
import {verifyIEEndpoint} from '@store/user/endpoints';
import {removeLoader, setLoader} from '@store/loader';
import {openBottomSheet} from '@store/modal';
import {goBack} from '@navigation/RootNavigation';

export default ({params, formik}) =>
  async dispatch => {
    const {endpoint, url} = verifyIEEndpoint;
    dispatch(setLoader(endpoint));

    try {
      await httpClient.post(url, params);

      dispatch(setUserStatus(USER_STATUS.TEXT_DOCS_IN_VERIFICATION));
      dispatch(openBottomSheet({type: 'CHECKING_REQUISITES'}));
      goBack();
    } catch (e) {
      handleFormikResponseError(e.response, formik);

      console.log('_verifyIERequest', e.message);
    } finally {
      dispatch(removeLoader(endpoint));
    }
  };
