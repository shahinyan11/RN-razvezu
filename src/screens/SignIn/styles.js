import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: MAIN_COLORS.BLACK,
    paddingTop: scaledSize(120),
  },
  whiteContainer: {
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingTop: 20,
    flex: 1,
  },
  keyboardContainer: {
    paddingHorizontal: scaledSize(20),
    paddingTop: 87,
  },
  activeKeyboard: {
    paddingTop: 35,
  },
  img: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 260,
    height: 237,
    right: 0,
  },
  small: {
    top: 40,
    width: 193,
    height: 180,
  },
  title: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S36,
    fontWeight: '600',
    letterSpacing: 0.3,
    marginBottom: 18,
  },

  text: {
    marginBottom: 20,
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: 0.3,
  },
  inputContainer: {
    marginBottom: 16,
  },
  buttonContainer: {
    marginBottom: 26,
  },
  bottomText: {
    fontSize: SIZES.S14,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: 0.3,
    lineHeight: SIZES.S14 * 1.4,
    marginBottom: 40,
  },
  underline: {
    textDecorationLine: 'underline',
  },

  buttonsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },

  socialButton: {
    flex: 0.48,
    paddingHorizontal: scaledSize(20),
  },

  ml4: {
    marginLeft: scaledSize(5),
  },

  appVersion: {
    color: TEXT_COLORS.GREY_158,
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 10,
  },
});

export default st;
