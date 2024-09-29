import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: MAIN_COLORS.BLACK,
  },

  whiteContainer: {
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingTop: 25,
    paddingBottom: 40,
    flex: 1,
  },
  keyboardContainer: {
    paddingHorizontal: scaledSize(20),
    paddingBottom: 40,
  },

  title: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S28,
    letterSpacing: -0.3,
    fontWeight: '600',
    marginBottom: 16,
  },

  text: {
    marginBottom: 16,
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: -0.3,
  },
  inputContainer: {
    marginBottom: 16,
  },
  button: {
    width: '100%',
    position: 'absolute',
    paddingHorizontal: scaledSize(20),
    bottom: 20,
  },
  measurement: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: -0.3,
  },
});

export default st;
