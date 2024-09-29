import {StyleSheet} from 'react-native';
import {
  BUTTON_COLORS,
  MAIN_COLORS,
  TEXT_COLORS,
} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const defaultStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    borderRadius: 96,
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerDisable: {
    backgroundColor: BUTTON_COLORS.DISABLED,
  },
  text: {
    flex: 1,
    fontWeight: '600',
    fontSize: SIZES.S16,
    textAlign: 'center',
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.3,
  },
  textDisabled: {
    color: TEXT_COLORS.BLACK_05,
  },
});

export const black = StyleSheet.create({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: BUTTON_COLORS.BLACK,
  },
});

export const white = StyleSheet.create({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: BUTTON_COLORS.WHITE,
  },
  text: {
    ...defaultStyles.text,
    color: TEXT_COLORS.BLACK,
  },
});

export const green = StyleSheet.create({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    backgroundColor: BUTTON_COLORS.GREEN,
  },
  text: {
    ...defaultStyles.text,
    color: TEXT_COLORS.WHITE,
  },
});

export const transparent = StyleSheet.create({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_BTN,
  },
  text: {
    ...defaultStyles.text,
    color: TEXT_COLORS.GREY_BTN,
  },
});

export const cancelTransparent = StyleSheet.create({
  ...defaultStyles,
  container: {
    ...defaultStyles.container,
    borderWidth: 1,
    justifyContent: 'center',
    borderColor: MAIN_COLORS.GREY_BTN,
  },
  text: {
    ...transparent.text,
    color: TEXT_COLORS.RED,
  },
});
