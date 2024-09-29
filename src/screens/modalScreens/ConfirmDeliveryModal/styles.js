import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: scaledSize(20),
    paddingBottom: scaledSize(20),
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: scaledSize(12),
  },

  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
  },

  codeConfirm: {
    marginBottom: 30,
    marginTop: 24,
  },

  button: {
    marginTop: scaledSize(30),
  },
});

export default styles;
