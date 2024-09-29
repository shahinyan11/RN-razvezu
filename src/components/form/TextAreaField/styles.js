import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_BTN,
    borderRadius: 12,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  containerBlur: {
    opacity: 0.5,
  },
  errorContainer: {
    borderColor: MAIN_COLORS.RED,
  },

  input: {
    flex: 1,
    textAlignVertical: 'top',
    color: TEXT_COLORS.BLACK,
    padding: scaledSize(12),
    height: scaledSize(103),
  },

  inputBlur: {
    opacity: 0.5,
  },

  errorText: {
    marginTop: 1,
    paddingHorizontal: scaledSize(15),
    fontSize: SIZES.S12,
    color: TEXT_COLORS.RED,
  },
});

export default styles;
