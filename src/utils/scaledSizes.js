import {SCREEN_HEIGHT, SCREEN_WIDTH} from '@constants/device';
import {Platform, PixelRatio} from 'react-native';

const DEF_HEIGHT = 812;
const DEF_WIDTH = 375;

const scaleWidth = SCREEN_WIDTH / DEF_WIDTH; // 1080 / 375 = 2.88
const scaleHeight = SCREEN_HEIGHT / DEF_HEIGHT; // 2400 / 812 = 2.95
const scale = Math.min(scaleWidth, scaleHeight); // 2.88

/*
export const scaledSize = size => {
  return Math.ceil(size * scale);
};
*/

/*
export const scaledFontSizeOld = size => {
  const responsiveText = Math.ceil(size * scale); // 28 * 2.88 = 80.64
  return responsiveText < 8 ? 8 : responsiveText;
};
*/

/*
export const scaledFontSize = size => {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};
*/

const fontScale = PixelRatio.getFontScale();

export const scaledSize = size => size / fontScale;

export const scaledFontSize = size => size / fontScale;
