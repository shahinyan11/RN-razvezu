import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    borderRadius: scaledSize(24),
    marginBottom: scaledSize(12),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaledSize(9),
    paddingVertical: scaledSize(12),
  },

  grayBorder: {
    borderTopWidth: 1,
    borderTopColor: MAIN_COLORS.GREY_40_01,
  },

  plus: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scaledSize(36),
    height: scaledSize(36),
    borderRadius: scaledSize(18),
    backgroundColor: MAIN_COLORS.BLACK,
  },

  dateTitle: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
    textTransform: 'capitalize',
  },

  date: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    textTransform: 'capitalize',
  },

  slotName: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '600',
  },

  text: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
  },
});

export default st;
