import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  whiteContainer: {
    paddingTop: 20,
    paddingHorizontal: scaledSize(20),
    paddingBottom: scaledSize(70),
  },

  h2: {
    fontWeight: '600',
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    marginBottom: scaledSize(12),
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  label: {
    fontSize: SIZES.S14,
    color: TEXT_COLORS.BLACK_05,
    fontWeight: '400',
  },

  value: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    marginBottom: scaledSize(2),
  },

  addressView: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    padding: scaledSize(12),
    borderRadius: scaledSize(16),
    marginBottom: 12,
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

  rowItem: {
    flex: 1,
    backgroundColor: MAIN_COLORS.WHITE_244,
    padding: scaledSize(12),
    borderRadius: scaledSize(16),
    marginBottom: 12,
  },
  orderComment: {
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_BTN,
    borderRadius: scaledSize(12),
    padding: scaledSize(12),
    paddingBottom: scaledSize(16),
    minHeight: scaledSize(70),
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 20,
  },

  mb8: {
    marginBottom: scaledSize(8),
  },

  reportButton: {
    marginTop: scaledSize(24),
    marginBottom: scaledSize(36),
  },

  divider: {
    width: scaledSize(5),
  },

  instruction: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    paddingHorizontal: scaledSize(12),
    paddingVertical: scaledSize(16),
    borderRadius: scaledSize(16),
    marginBottom: 12,
  },

  boldText: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    fontWeight: '600',
    marginBottom: 8,
  },

  text: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    letterSpacing: -0.3,
    marginBottom: 13,
  },

  bottomRow: {
    alignSelf: 'center',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: scaledSize(12),
    paddingHorizontal: scaledSize(20),
    backgroundColor: MAIN_COLORS.WHITE,
    bottom: 0,
  },
  redButton: {
    flex: 0.49,
    borderColor: MAIN_COLORS.RED,
  },
  redButtonText: {
    color: MAIN_COLORS.RED,
  },
  greenButton: {
    flex: 0.49,
  },
});

export default st;
