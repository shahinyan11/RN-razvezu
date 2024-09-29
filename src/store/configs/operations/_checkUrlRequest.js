import httpClient from '@httpClient';
import {cityInfo} from '@constants/apiRoutes';
import {setBaseUrl} from '@store/configs';
import {logoutAction} from '@store/auth/operations';
import Toast from 'react-native-toast-message';

export default url => async dispatch => {
  try {
    await httpClient.get(`${url}${cityInfo}`);

    dispatch(setBaseUrl(url));
    dispatch(logoutAction());

    Toast.show({type: 'success', text1: 'Прокси успешно изменен'});
  } catch (e) {
    console.log('_checkUrlRequest', e.message);
  }
};
