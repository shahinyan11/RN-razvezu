import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  sheetBackground: {
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    backgroundColor: MAIN_COLORS.WHITE,
    overflow: 'hidden',
  },
  indicator: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
  },

  content: {
    paddingHorizontal: 20,
    minHeight: 100,
  },

  title: {
    fontSize: SIZES.S36,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 28,
    textAlign: 'center',
  },
  text: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.BLACK_05,
    textAlign: 'center',
    fontWeight: '400',
    letterSpacing: -0.3,
    marginBottom: 40,
  },
  inputContainer: {
    marginBottom: 24,
  },

  button: {
    alignSelf: 'flex-end',
    marginBottom: 20,
  },
});

export default styles;
