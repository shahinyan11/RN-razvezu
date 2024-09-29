import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';
import {TEXT_COLORS} from '@constants/styles/colors';

const st = StyleSheet.create({
  container: {
    paddingHorizontal: scaledSize(20),
    paddingBottom: 50,
  },

  title: {
    fontSize: SIZES.S28,
    fontWeight: '600',
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    marginBottom: 12,
  },
  month: {
    color: TEXT_COLORS.GREY_BTN,
  },
  period: {
    fontSize: SIZES.S22,
    color: TEXT_COLORS.GREY_BTN,
    fontWeight: '600',
    letterSpacing: -1,
  },
  cardContainer: {
    marginBottom: 14,
  },
});

export default st;
