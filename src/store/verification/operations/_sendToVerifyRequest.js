import httpClient from '@httpClient';
import {setUserStatus} from '@store/user';
import {USER_STATUS} from '@constants/user';
import {removeLoader, setLoader} from '@store/loader';
import {sendToVerifyRequestEndpoint} from '@store/verification/endpoint';

export default () => async (dispatch, getSate) => {
  const {endpoint, url} = sendToVerifyRequestEndpoint();
  dispatch(setLoader(endpoint));

  try {
    const {passportPhotos, driverLicensePhotos, carDocPhotos, carPhotos} =
      getSate().verification;

    const data = new FormData();

    Object.entries(passportPhotos).forEach(([, value]) => {
      data.append('passport[]', value);
    });
    Object.entries(driverLicensePhotos).forEach(([, value]) => {
      data.append('driverLicense[]', value);
    });
    Object.entries(carDocPhotos).forEach(([, value]) => {
      data.append('carDoc[]', value);
    });
    Object.entries(carPhotos).forEach(([, value]) => {
      data.append('car[]', value);
    });

    await httpClient.post(url, data, {
      headers: {'Content-Type': 'multipart/form-data'},
    });

    dispatch(setUserStatus(USER_STATUS.PHOTO_DOCS_IN_VERIFICATION));
  } catch (e) {
    console.log('sendToVerifyRequest', e.message);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
