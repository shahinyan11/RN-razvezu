import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: MAIN_COLORS.BLACK,
  },
  whiteContainer: {
    flex: 1,
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
    paddingTop: scaledSize(107),
    marginTop: scaledSize(12),
  },

  title: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S36,
    letterSpacing: 0.3,
    marginBottom: 18,
  },

  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    lineHeight: SIZES.S16 * 1.4,
    letterSpacing: 0.3,
  },

  change: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    letterSpacing: 0.3,
  },

  codeConfirm: {
    marginBottom: 16,
    marginTop: 24,
  },

  bottomView: {
    marginBottom: 65,
  },

  bottomText: {
    // marginTop: 26,
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: 0.3,
    lineHeight: SIZES.S14 * 1.4,
  },

  getNewCode: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    letterSpacing: 0.3,
    lineHeight: SIZES.S14 * 1.4,
    marginBottom: 65,
  },
});

export default st;
