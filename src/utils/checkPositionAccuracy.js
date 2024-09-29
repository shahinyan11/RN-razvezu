import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@constants/device';

const checkPositionAccuracy = ({maskBounds, objectBounds, mirrored}) => {
  let accuracy_left, accuracy_top;

  const side = mirrored ? 'right' : 'left';
  const faceCoords = {...objectBounds, [side]: objectBounds.left};

  const mask_right = SCREEN_WIDTH - (maskBounds.left + maskBounds.width);
  const mask_bottom = SCREEN_HEIGHT - (maskBounds.top + maskBounds.height);

  const face_right = SCREEN_WIDTH - (faceCoords?.left + faceCoords.width);
  const face_left = SCREEN_WIDTH - (faceCoords?.right + faceCoords.width);
  const face_bottom = SCREEN_HEIGHT - (faceCoords.top + faceCoords.height);

  if (side === 'left') {
    accuracy_left =
      faceCoords.left > maskBounds.left && face_right > mask_right;
  } else {
    accuracy_left =
      faceCoords.right > mask_right && face_left > maskBounds.left;
  }

  accuracy_top = faceCoords.top > maskBounds.top && face_bottom > mask_bottom;

  return accuracy_left && accuracy_top;
};

export default checkPositionAccuracy;
