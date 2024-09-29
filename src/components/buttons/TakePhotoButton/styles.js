import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    width: '100%',
    height: 52,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: MAIN_COLORS.BLACK_05,
  },

  errorContainer: {
    borderColor: 'red',
  },

  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.GREY_BTN,
    fontWeight: '600',
    letterSpacing: -0.3,
    textAlign: 'center',
    marginLeft: 10,
  },
});

export default st;
