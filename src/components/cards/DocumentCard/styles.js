import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    paddingVertical: scaledSize(20),
    paddingBottom: scaledSize(16),
    borderRadius: 18,
  },

  text: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 8,
    marginLeft: 20,
  },

  scrollContainer: {
    paddingHorizontal: scaledSize(20),
  },

  blackBox: {
    width: scaledSize(104),
    height: scaledSize(92),
    padding: scaledSize(12),
    borderRadius: scaledSize(12),
    backgroundColor: MAIN_COLORS.BLACK,
    justifyContent: 'space-between',
  },

  divider: {
    width: scaledSize(7),
  },

  boxText: {
    color: TEXT_COLORS.WHITE,
    fontSize: SIZES.S14,
    fontWeight: '600',
    letterSpacing: -0.3,
  },

  number: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S24,
    lineHeight: SIZES.S24 * 1.4,
    fontWeight: '600',
  },

  smallText: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    fontWeight: '400',
  },
});

export default st;
