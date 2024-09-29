import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',

    borderWidth: 1,
    borderRadius: 71,
    borderStyle: 'solid',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: MAIN_COLORS.GREY_158,
    paddingHorizontal: scaledSize(24),
    height: scaledSize(60),
  },
  errorContainer: {
    borderColor: MAIN_COLORS.RED,
  },

  text: {
    flex: 1,
    color: TEXT_COLORS.BLACK,
  },

  errorText: {
    marginTop: 1,
    paddingHorizontal: scaledSize(15),
    fontSize: SIZES.S12,
    color: TEXT_COLORS.RED,
  },
});

export default styles;
