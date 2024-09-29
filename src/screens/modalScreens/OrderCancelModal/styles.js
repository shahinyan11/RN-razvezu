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
    paddingBottom: scaledSize(20),
    justifyContent: 'flex-start',
  },

  title: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: scaledSize(12),
    marginHorizontal: scaledSize(20),
  },

  scrollContainer: {flexGrow: 1},

  checkboxContainer: {
    justifyContent: 'space-between',
    transform: [{rotateZ: '180deg'}],
    paddingVertical: scaledSize(20),
    borderTopWidth: 1,
    borderTopColor: MAIN_COLORS.GREY_BTN,
    paddingHorizontal: scaledSize(20),
  },
  innerIconStyle: {
    borderRadius: scaledSize(7),
  },
  checkedViewStyle: {
    width: scaledSize(10),
    height: scaledSize(10),
    borderRadius: scaledSize(3),
  },
  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    transform: [{rotateZ: '180deg'}],
    marginRight: 'auto',
  },

  bottom: {
    marginTop: scaledSize(16),
    paddingHorizontal: scaledSize(20),
  },

  label: {
    fontWeight: '600',
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    marginBottom: scaledSize(12),
  },
  button: {
    marginTop: scaledSize(45),
  },
});

export default styles;
