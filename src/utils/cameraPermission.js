import {Platform} from 'react-native';
import {
  check,
  openSettings,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';
import store from '@store';
import {setCameraAsked} from '@store/permission';
import Toast from 'react-native-toast-message';
import TEXTS from '@constants/texts';

const cameraPermission = async () => {
  const OS = Platform.OS.toUpperCase();
  let result;

  result = await check(PERMISSIONS[OS].CAMERA);

  if (result !== RESULTS.GRANTED) {
    result = await request(PERMISSIONS[OS].CAMERA);

    if (result !== RESULTS.GRANTED) {
      if (!store.getState().permission.cameraAsked) {
        store.dispatch(setCameraAsked(true));
        return;
      }

      Toast.show({
        type: 'info',
        text1: TEXTS.CAMERA_PERMISSION,
        onPress: openSettings,
      });
    }
  }

  return result === RESULTS.GRANTED;
};

export default cameraPermission;
