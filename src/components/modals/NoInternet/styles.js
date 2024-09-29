import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  imgContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  whiteContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(22),
    paddingVertical: scaledSize(40),
  },

  title: {
    marginBottom: scaledSize(20),
    fontSize: SIZES.S36,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    textAlign: 'center',
  },

  text: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '400',
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: -0.3,
    textAlign: 'center',
    marginBottom: scaledSize(40),
  },

  button: {
    marginBottom: scaledSize(20),
  },

  buttonText: {
    fontSize: SIZES.S16,
    fontWeight: '600',
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
});

export default st;
