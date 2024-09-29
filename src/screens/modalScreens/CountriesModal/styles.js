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
  indicator: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
  },

  content: {
    flex: 1,
    paddingHorizontal: scaledSize(20),
    paddingBottom: scaledSize(20),
  },

  searchInput: {
    marginBottom: 28,
  },

  scrollContainer: {
    paddingBottom: 5,
  },
  checkboxContainer: {
    marginBottom: 24,
  },
  text: {
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    color: TEXT_COLORS.BLACK,
  },
  emptyView: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    marginTop: 12,
    textAlign: 'center',
    letterSpacing: -0.3,
    color: TEXT_COLORS.BLACK_05,
  },
});

export default styles;
