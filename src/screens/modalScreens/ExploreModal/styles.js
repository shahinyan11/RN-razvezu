import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

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
    lineHeight: SIZES.S28 * 1.4,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 12,
  },
  text: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.BLACK_05,
    fontWeight: '400',
    letterSpacing: -0.3,
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 24,
  },

  button: {
    alignSelf: 'flex-end',
  },
});

export default styles;