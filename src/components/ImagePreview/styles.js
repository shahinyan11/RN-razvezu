import {StyleSheet} from 'react-native';

import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    padding: 12,
    height: 85,
    flexDirection: 'row',
    backgroundColor: MAIN_COLORS.WHITE_244,
    borderRadius: 16,
  },

  preview: {
    borderRadius: 12,
    height: '100%',
    width: scaledSize(84),
  },

  textBox: {
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: scaledSize(7),
    marginHorizontal: scaledSize(12),
  },
  name: {
    fontSize: SIZES.S16,
    fontWeight: '500',
    color: MAIN_COLORS.BLACK,
  },

  resolution: {
    fontSize: SIZES.S14,
    fontWeight: '400',
    color: MAIN_COLORS.BLACK_05,
  },

  iconBox: {
    height: '100%',
    width: scaledSize(43),
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_BTN,
    borderRadius: scaledSize(12),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default st;
