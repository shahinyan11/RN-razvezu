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
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    backgroundColor: MAIN_COLORS.WHITE_244,
    overflow: 'hidden',
  },
  indicator: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
  },

  scrollContainer: {
    paddingTop: scaledSize(80),
  },

  whiteContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopRightRadius: 32,
    borderTopLeftRadius: 32,
    paddingTop: scaledSize(58),
    paddingBottom: scaledSize(32),
  },

  circle: {
    position: 'absolute',
    top: -scaledSize(39),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: MAIN_COLORS.WHITE,
    width: scaledSize(78),
    height: scaledSize(78),
    borderRadius: scaledSize(78),
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  h2: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.4,
    marginBottom: 8,
  },
  text: {
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.BLACK_05,
    fontWeight: '400',
    letterSpacing: -0.3,
    marginBottom: 16,
    textAlign: 'center',
  },
  greyContainer: {
    paddingVertical: scaledSize(8),
    paddingHorizontal: scaledSize(16),
    borderRadius: scaledSize(16),
    backgroundColor: MAIN_COLORS.WHITE_244,
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

  buttonContainer: {
    marginTop: 15,
  },
});

export default styles;
