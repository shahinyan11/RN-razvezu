import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    padding: scaledSize(4),
    paddingBottom: scaledSize(20),
    borderRadius: scaledSize(18),
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  whiteContainer: {
    padding: scaledSize(16),
    paddingBottom: scaledSize(20),
    borderRadius: scaledSize(18),
    backgroundColor: MAIN_COLORS.WHITE,
    marginBottom: scaledSize(24),
  },

  text: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '400',
  },

  amount: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S36,
    fontWeight: '600',
    marginTop: scaledSize(16),
    marginBottom: scaledSize(8),
    letterSpacing: -0.3,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  blackCircle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: scaledSize(56),
    width: scaledSize(56),
    borderRadius: scaledSize(56),
    backgroundColor: MAIN_COLORS.BLACK,
    marginBottom: scaledSize(8),
  },
  blackText: {
    fontSize: SIZES.S12,
    fontWeight: '600',
    letterSpacing: -0.5,
    textAlign: 'center',
  },
});

export default st;
