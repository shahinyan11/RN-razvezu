import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    padding: 8,
    borderRadius: 16,
    flexDirection: 'row',

    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  numberBox: {
    width: 36,
    height: 46,
    borderRadius: 12,
    backgroundColor: MAIN_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  name: {
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
  },
  green: {
    color: TEXT_COLORS.GREEN,
  },
  orange: {
    color: TEXT_COLORS.ORANGE,
  },

  comment: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    fontWeight: '500',
  },
});

export default st;
