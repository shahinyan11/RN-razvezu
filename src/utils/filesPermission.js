import {Platform} from 'react-native';
import {
  checkMultiple,
  openSettings,
  PERMISSIONS,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import Toast from 'react-native-toast-message';
import TEXTS from '@constants/texts';
import store from '@store';
import {setFileAsked} from '@store/permission';

const filesPermission = async () => {
  const OS = Platform.OS.toUpperCase();
  let result = OS === 'IOS';

  if (!result) {
    const permissionTypes = [
      PERMISSIONS[OS].READ_MEDIA_IMAGES,
      PERMISSIONS[OS].READ_EXTERNAL_STORAGE,
    ];

    const checkStatuses = await checkMultiple(permissionTypes);

    result = Object.values(checkStatuses).includes(RESULTS.GRANTED);

    if (!result) {
      const reqStatuses = await requestMultiple(permissionTypes);

      result = Object.values(reqStatuses).includes(RESULTS.GRANTED);

      if (Object.values(reqStatuses).includes(RESULTS.BLOCKED)) {
        if (!store.getState().permission.fileAsked) {
          store.dispatch(setFileAsked(true));
          return;
        }

        Toast.show({
          type: 'info',
          text1: TEXTS.FILE_PERMISSION,
          onPress: openSettings,
        });
      }
    }
  }

  return result;
};

export default filesPermission;
