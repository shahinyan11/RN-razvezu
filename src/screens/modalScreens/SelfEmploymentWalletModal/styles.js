import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  sheetBackground: {
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    color: 'red',
    overflow: 'hidden',
  },

  content: {
    flex: 1,
    overflow: 'hidden',
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
  },

  title: {
    fontSize: SIZES.S36,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 28,
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
