import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  sheetBackground: {
    overflow: 'hidden',
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    backgroundColor: MAIN_COLORS.GREY_40,
  },
  indicator: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
  },

  content: {
    flex: 1,
  },

  top: {
    paddingHorizontal: scaledSize(20),
  },

  h2: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.WHITE,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 8,
  },

  subTitle: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.WHITE_05,
    letterSpacing: -0.3,
    marginBottom: 16,
  },

  whiteContainer: {
    flex: 1,
    padding: scaledSize(20),
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopRightRadius: scaledSize(24),
    borderTopLeftRadius: scaledSize(24),
    paddingBottom: scaledSize(20),
  },

  greyContainer: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    paddingVertical: scaledSize(8),
    paddingHorizontal: scaledSize(16),
    borderRadius: scaledSize(16),
    marginBottom: scaledSize(24),
  },
  label: {
    fontSize: SIZES.S14,
    color: TEXT_COLORS.BLACK_05,
    fontWeight: '500',
    marginBottom: 4,
  },

  value: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    marginBottom: scaledSize(12),
  },

  valueLast: {
    marginBottom: 0,
  },
});

export default styles;
