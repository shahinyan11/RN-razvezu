import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {},
  title: {
    textAlign: 'left',
  },

  whiteContainer: {
    paddingHorizontal: scaledSize(20),
    paddingTop: scaledSize(25),
    paddingBottom: 20,
  },

  faqItem: {
    borderBottomWidth: 0.5,
    borderBottomColor: MAIN_COLORS.BLACK_02,
    paddingBottom: 10,
    marginBottom: 20,
  },

  faqItemOpen: {
    paddingBottom: 0,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  iconOpen: {
    transform: [{rotateZ: '180deg'}],
  },

  bottomText: {
    textAlign: 'center',
    fontSize: SIZES.S14,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: 0.3,
    lineHeight: SIZES.S14 * 1.4,
    marginBottom: 40,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default st;
