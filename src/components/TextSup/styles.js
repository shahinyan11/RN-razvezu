import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {TEXT_COLORS} from '@constants/styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    fontSize: SIZES.S16,
    letterSpacing: -0.3,
    color: TEXT_COLORS.BLACK_05,
  },
  sup: {
    marginTop: -(SIZES.S16 / 4),
    color: TEXT_COLORS.BLACK_05,
  },
});

export default styles;
