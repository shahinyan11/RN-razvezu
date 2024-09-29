import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: scaledSize(20),
    zIndex: 9999999999999,
  },

  content: {
    minHeight: 44,
    padding: 8,
    backgroundColor: MAIN_COLORS.WHITE_244,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconBox: {
    height: 36,
    width: 36,
    borderRadius: 12,
    backgroundColor: MAIN_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    marginLeft: 12,
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S14,
    fontWeight: '600',
  },
});
export default st;
