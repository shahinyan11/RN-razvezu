import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLORS.BLACK_36_08,
  },
  background: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: MAIN_COLORS.GREY_40,
    borderTopLeftRadius: scaledSize(24),
    borderTopRightRadius: scaledSize(24),
  },
  indicator: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
  },
  topContainer: {
    paddingTop: scaledSize(24),
    flexDirection: 'row',
    backgroundColor: MAIN_COLORS.GREY_40,
    paddingHorizontal: scaledSize(20),
    borderTopLeftRadius: scaledSize(24),
    borderTopRightRadius: scaledSize(24),
    paddingBottom: scaledSize(16),
  },
  topBubble: {
    backgroundColor: MAIN_COLORS.BLACK,
    borderRadius: scaledSize(8),
    padding: scaledSize(8),
    flex: 1,
  },
  bubbleDivider: {
    width: scaledSize(4),
  },
  textMini: {
    fontSize: SIZES.S14,
    color: TEXT_COLORS.WHITE_05,
    marginBottom: scaledSize(8),
  },
  whiteText: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.WHITE,
    fontWeight: '600',
  },
  whiteContainer: {
    borderTopLeftRadius: scaledSize(24),
    borderTopRightRadius: scaledSize(24),
    backgroundColor: MAIN_COLORS.WHITE,
    flex: 1,
  },
  blackRound: {
    width: scaledSize(36),
    height: scaledSize(36),
    borderRadius: scaledSize(36),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: MAIN_COLORS.BLACK,
    marginLeft: scaledSize(15),
  },
  scrollContainer: {
    paddingBottom: 17,
    padding: scaledSize(20),
    flexGrow: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: scaledSize(12),
  },
  title: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
  },

  waypointContainer: {
    marginBottom: scaledSize(12),
  },

  commentContainer: {
    marginTop: 'auto',
  },

  commentTitle: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    marginBottom: scaledSize(8),
    marginTop: scaledSize(24),
  },
  commentBubble: {
    padding: scaledSize(12),
    borderRadius: scaledSize(16),
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_BTN,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.BLACK_05,
    fontWeight: '400',
  },
  button: {
    marginTop: scaledSize(18),
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

export default styles;
