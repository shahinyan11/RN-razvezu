import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 71,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: MAIN_COLORS.GREY_158,
    paddingHorizontal: scaledSize(24),
    height: 60,
  },

  containerBlur: {
    opacity: 0.5,
  },

  errorContainer: {
    borderColor: MAIN_COLORS.RED,
  },

  input: {
    flex: 1,
    color: TEXT_COLORS.BLACK,
    marginHorizontal: scaledSize(12),
  },
});

export default styles;
