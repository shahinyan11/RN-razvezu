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

  title: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
  },

  desk: {
    flex: 1,
    borderWidth: 1,
    borderColor: MAIN_COLORS.GREY_BTN,
    borderRadius: scaledSize(16),
    marginVertical: scaledSize(12),
  },

  iconTrash: {
    position: 'absolute',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    bottom: scaledSize(20),
    width: scaledSize(40),
    height: scaledSize(40),
    borderRadius: scaledSize(40),
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    transform: [{rotateZ: '180deg'}],
    marginRight: 'auto',
  },

  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaledSize(16),
    paddingHorizontal: scaledSize(20),
  },

  button: {
    flex: 0.49,
  },
});

export default styles;
