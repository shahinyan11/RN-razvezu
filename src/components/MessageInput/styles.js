import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const styles = StyleSheet.create({
  container: {
    minHeight: 60,
    maxHeight: 120,
    width: '100%',
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_158,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaledSize(24),
  },
  containerBlur: {
    opacity: 0.5,
  },

  input: {
    flex: 1,
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S16,
    letterSpacing: -0.3,
  },

  inputBlur: {
    opacity: 0.5,
  },

  rightBox: {
    flexDirection: 'row',
  },

  icon: {
    marginRight: 12,
  },
});

export default styles;
