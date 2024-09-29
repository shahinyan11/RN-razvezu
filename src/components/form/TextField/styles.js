import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 71,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaledSize(24),
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
    height: scaledSize(60), // this value set for KeyboardAvoidingView. It works with input height
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
