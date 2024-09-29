import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: scaledSize(9),
    paddingVertical: scaledSize(12),
    borderRadius: scaledSize(24),
    backgroundColor: MAIN_COLORS.WHITE_244,
    alignItems: 'center',
    marginBottom: scaledSize(12),
  },

  circle: {
    width: scaledSize(48),
    height: scaledSize(48),
    borderRadius: scaledSize(24),
    backgroundColor: MAIN_COLORS.BLACK,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledSize(12),
  },

  centerBox: {
    flex: 1,
  },

  boldText: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
  },

  text: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
  },
});

export default st;
