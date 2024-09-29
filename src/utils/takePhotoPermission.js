import cameraPermission from '@utils/cameraPermission';
import filesPermission from '@utils/filesPermission';

const takePhotoPermission = async () => {
  let res = await cameraPermission();

  if (res) {
    return await filesPermission();
  }

  return false;
};

export default takePhotoPermission;
