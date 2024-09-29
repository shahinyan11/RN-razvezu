import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  whiteContainer: {
    paddingHorizontal: scaledSize(20),
  },
  bubblesRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 34,
  },

  bubble: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  label: {
    fontSize: SIZES.S14,
    fontWeight: '400',
    color: MAIN_COLORS.BLACK_05,
    marginBottom: 8,
  },

  boldText: {
    fontSize: SIZES.S16,
    fontWeight: '600',
    color: MAIN_COLORS.BLACK,
  },

  divider: {
    width: 4,
  },
});

export default st;
