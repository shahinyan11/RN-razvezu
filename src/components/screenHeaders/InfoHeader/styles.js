import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    height: scaledSize(60),
    paddingHorizontal: scaledSize(20),
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: MAIN_COLORS.BLACK,
  },
  logo: {
    height: scaledSize(48),
    width: scaledSize(48),
    resizeMode: 'contain',
    borderRadius: scaledSize(48),
    marginRight: scaledSize(12),
    marginLeft: scaledSize(8),
  },
  back: {
    marginRight: scaledSize(10),
  },

  title: {
    fontWeight: '600',
    fontSize: SIZES.S16,
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.3,
  },
  text: {
    fontWeight: '400',
    fontSize: SIZES.S14,
    color: TEXT_COLORS.WHITE_075,
    letterSpacing: -0.3,
  },
});

export default st;
