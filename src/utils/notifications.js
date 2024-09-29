import messaging from '@react-native-firebase/messaging';
import {requestNotifications, RESULTS} from 'react-native-permissions';

import store from '@store';
import {setFcmToken} from '@store/app';
import {isAndroid, isIos} from '@constants/device';

export const requestUserPermission = async () => {
  let enabled;

  if (isIos) {
    const authStatus = await messaging().requestPermission();
    enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  }

  if (isAndroid) {
    const res = await requestNotifications(['alert', 'badge', 'sound']);
    enabled = res.status === RESULTS.GRANTED;
  }

  if (enabled) {
    const token = await messaging().getToken();
    store.dispatch(setFcmToken(token));
  }
};
