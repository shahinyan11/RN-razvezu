import {StyleSheet} from 'react-native';
import {TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    marginTop: 12,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: TEXT_COLORS.BLACK_05,
  },
});

export default st;
