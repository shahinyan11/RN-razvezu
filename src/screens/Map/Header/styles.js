import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';
import {TEXT_COLORS} from '@constants/styles/colors';

const st = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: scaledSize(20),
    height: 60,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    fontWeight: '400',
    color: TEXT_COLORS.BLACK,
  },
  icon: {
    top: 0.5,
    left: '100%',
    position: 'absolute',
  },

  textBold: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '600',
    color: TEXT_COLORS.BLACK,
  },
});

export default st;
