import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';

const st = StyleSheet.create({
  whiteContainer: {
    paddingTop: 20,
    paddingHorizontal: scaledSize(20),
  },
  h2: {
    marginTop: scaledSize(24),
    fontWeight: '600',
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    marginBottom: 16,
  },

  menuItem: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    height: scaledSize(52),
    flexDirection: 'row',
    borderRadius: scaledSize(55),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scaledSize(24),
    paddingRight: scaledSize(14),
    marginBottom: scaledSize(12),
  },
});

export default st;
