import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  imgContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    // paddingBottom: 32,
  },
  img: {
    height: '100%',
    resizeMode: 'contain',
  },
  whiteContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
    paddingTop: 40,
    marginTop: 32,
  },

  title: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S36,
    fontWeight: '600',
    letterSpacing: -0.3,
    textAlign: 'center',
    marginBottom: 20,
  },

  infoBox: {
    marginTop: 20,
    padding: 8,
    paddingTop: 13,
    backgroundColor: MAIN_COLORS.WHITE_244,
    borderRadius: scaledSize(24),
    width: '100%',
  },

  textBold: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
    letterSpacing: -0.3,
    textAlign: 'center',
    marginBottom: 2,
  },

  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    lineHeight: SIZES.S16 * 1.4,
    letterSpacing: -0.3,
    textAlign: 'center',
    marginBottom: 10,
  },

  textMini: {
    fontSize: SIZES.S14,
    color: TEXT_COLORS.BLACK_05,
    lineHeight: SIZES.S14 * 1.4,
    letterSpacing: -0.3,
    textAlign: 'center',
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  priceInfo: {
    borderRadius: scaledSize(20),
    backgroundColor: MAIN_COLORS.WHITE,
    paddingHorizontal: scaledSize(13),
    paddingVertical: 11,
    alignItems: 'center',
    flex: 0.48,
  },

  totalView: {
    marginTop: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: scaledSize(16),
    backgroundColor: MAIN_COLORS.WHITE,
    paddingHorizontal: scaledSize(16),
    paddingVertical: 11,
  },

  totalText: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK_05,
    lineHeight: SIZES.S20 * 1.4,
    letterSpacing: -0.3,
  },
});

export default st;
