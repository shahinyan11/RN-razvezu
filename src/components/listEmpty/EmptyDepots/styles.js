import {StyleSheet} from 'react-native';
import {TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: scaledSize(100),
  },
  img: {
    marginBottom: 12,
    height: scaledSize(175),
    resizeMode: 'contain',
  },

  text: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    letterSpacing: -0.3,
    fontWeight: '400',
  },
});

export default st;
