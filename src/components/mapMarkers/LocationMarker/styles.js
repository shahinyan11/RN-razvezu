import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    height: 40,
    width: 56,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.GREY_158,
    borderRadius: 12,
  },

  completed: {
    backgroundColor: MAIN_COLORS.GREEN,
  },

  canceled: {
    backgroundColor: MAIN_COLORS.BLACK,
  },

  text: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.WHITE,
    fontWeight: '600',
  },

  triangle: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: MAIN_COLORS.GREY_158,
    alignSelf: 'center',
  },

  circle: {
    height: 7,
    width: 7,
    borderRadius: 7,
    alignSelf: 'center',
    marginTop: 4,
    backgroundColor: MAIN_COLORS.GREY_158,
  },

  completedTriangle: {
    borderTopColor: MAIN_COLORS.GREEN,
  },

  canceledTriangle: {
    borderTopColor: MAIN_COLORS.BLACK,
  },
});

export default st;
