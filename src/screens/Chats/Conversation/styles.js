import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    height: 48,
    width: 48,
    resizeMode: 'contain',
    marginRight: 12,
    marginLeft: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  yellowCircle: {
    height: 6,
    width: 6,
    backgroundColor: MAIN_COLORS.YELLOW,
    borderRadius: 6,
    marginLeft: 4,
  },
  title: {
    fontWeight: '600',
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.3,
    marginBottom: 2,
  },
  text: {
    fontWeight: '500',
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    color: TEXT_COLORS.WHITE_075,
    letterSpacing: -0.3,
  },
  whiteContainer: {
    marginTop: 12,
    paddingTop: 24,
    flex: 1,
    width: '100%',
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
  },

  previewContainer: {
    marginBottom: 16,
  },

  date: {
    textAlign: 'center',
    marginBottom: 22,
    fontWeight: '400',
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: -0.3,
  },

  bottomContainer: {
    paddingBottom: 20,
    paddingTop: 8,
  },
});

export default st;
