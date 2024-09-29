import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    padding: scaledSize(8),
    paddingTop: 12,
    borderRadius: scaledSize(24),
  },
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },

  logo: {
    width: 48,
    height: 48,
    borderRadius: 48,
    marginRight: scaledSize(12),
  },

  name: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
  },

  address: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '400',
  },

  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  whiteBox: {
    flex: 0.49,
    justifyContent: 'center',
    alignItems: 'center',
    height: scaledSize(86),
    width: scaledSize(157),
    borderRadius: 20,
    backgroundColor: MAIN_COLORS.WHITE,
  },

  number: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S24,
    lineHeight: SIZES.S24 * 1.4,
    fontWeight: '600',
  },

  smallText: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    fontWeight: '400',
  },

  button: {
    height: 40,
    backgroundColor: MAIN_COLORS.WHITE,
  },

  buttonText: {
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
  },
});

export default st;
