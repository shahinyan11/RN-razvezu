import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '../../../constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemContainer: {
    flex: 0.48,
    borderWidth: 1,
    borderRadius: 71,
    borderStyle: 'solid',
    justifyContent: 'center',
    borderColor: MAIN_COLORS.GREY_158,
    height: scaledSize(60),
    paddingLeft: scaledSize(24),
  },

  errorContainer: {
    borderColor: MAIN_COLORS.RED,
  },
  text: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    letterSpacing: -0.3,
  },
  errorText: {
    marginTop: 1,
    paddingHorizontal: scaledSize(15),
    fontSize: SIZES.S12,
    color: TEXT_COLORS.RED,
  },
});

export default styles;
