import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  title: {
    textAlign: 'left',
  },
  inputContainer: {
    width: '100%',
    height: scaledSize(60),
    paddingHorizontal: scaledSize(24),
    borderWidth: 1,
    borderRadius: 71,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: scaledSize(16),
  },

  text: {
    fontSize: SIZES.S16,
    letterSpacing: -0.3,
  },

  whiteContainer: {
    paddingTop: scaledSize(15),
    paddingBottom: 20,
  },

  logOut: {
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 20,
  },

  logOutText: {
    fontSize: SIZES.S16,
    fontWeight: '600',
    color: TEXT_COLORS.RED,
    letterSpacing: -0.3,
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
