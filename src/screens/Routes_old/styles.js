import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  header: {
    height: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  logo: {
    height: 48,
    width: 48,
    borderRadius: 48,
    resizeMode: 'contain',
    marginRight: 12,
    marginLeft: 8,
  },
  title: {
    fontWeight: '600',
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.3,
  },
  text: {
    fontWeight: '400',
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    color: TEXT_COLORS.WHITE_075,
    letterSpacing: -0.3,
  },
  whiteContainer: {
    flex: 1,
    width: '100%',
    marginTop: 12,
    paddingTop: 20,
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
  },
  h1: {
    fontWeight: '600',
    fontSize: SIZES.S32,
    lineHeight: SIZES.S32 * 1.4,
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
  },
  scrollHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  circle: {
    width: 32,
    height: 32,
    borderRadius: 32,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.WHITE_244,
  },
  countText: {
    fontWeight: '600',
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.BLACK,
  },
  cardContainer: {
    marginBottom: 20,
  },
});

export default st;
