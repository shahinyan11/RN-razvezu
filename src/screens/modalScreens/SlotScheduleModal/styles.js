import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  sheetBackground: {
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    backgroundColor: MAIN_COLORS.WHITE,
    overflow: 'hidden',
  },
  loader: {
    marginTop: scaledSize(20),
  },
  indicator: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
  },

  content: {
    flex: 1,
    paddingHorizontal: scaledSize(20),
    paddingTop: scaledSize(10),
    paddingBottom: scaledSize(20),
  },
  title: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    fontWeight: '600',
    marginBottom: scaledSize(12),
  },

  text: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.BLACK_05,
    letterSpacing: -0.3,
    marginBottom: scaledSize(16),
  },

  scrollContainer: {
    paddingBottom: 5,
  },
});

export default styles;
