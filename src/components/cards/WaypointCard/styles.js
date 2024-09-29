import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    padding: scaledSize(8),
    borderRadius: scaledSize(16),
    flexDirection: 'row',
    backgroundColor: MAIN_COLORS.WHITE_244,
    alignItems: 'center',
  },

  box: {
    width: scaledSize(36),
    height: scaledSize(46),
    borderRadius: scaledSize(12),
    backgroundColor: MAIN_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: scaledSize(8),
  },

  completed: {
    backgroundColor: MAIN_COLORS.GREEN,
  },

  canceled: {
    backgroundColor: MAIN_COLORS.BLACK,
  },

  textsBox: {
    flexGrow: 1,
    flexShrink: 1,
  },

  row: {
    marginTop: 6,
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '100%',
  },

  rowItem: {
    paddingVertical: 4,
    marginRight: scaledSize(4),
    paddingHorizontal: scaledSize(8),
    borderWidth: 1,
    borderRadius: 58,
    borderColor: MAIN_COLORS.GREY_BTN_03,
    marginBottom: 6,
  },

  address: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
  },

  smallText: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '400',
  },
});

export default st;
