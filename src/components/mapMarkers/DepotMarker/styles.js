import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    paddingHorizontal: 8,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.GREY_158,
    borderRadius: scaledSize(12),
  },

  active: {
    backgroundColor: MAIN_COLORS.BLACK,
  },

  text: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.WHITE,
    fontWeight: '600',
    marginLeft: 4,
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
  activeTriangle: {
    borderTopColor: MAIN_COLORS.BLACK,
  },
});

export default st;
