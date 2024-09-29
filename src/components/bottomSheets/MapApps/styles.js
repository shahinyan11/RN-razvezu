import {StyleSheet} from 'react-native';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  sheetBackground: {
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    backgroundColor: MAIN_COLORS.WHITE,
    overflow: 'hidden',
  },

  content: {
    paddingTop: 20,
    minHeight: 180,
    borderTopLeftRadius: scaledSize(32),
    borderTopRightRadius: scaledSize(32),
    paddingHorizontal: scaledSize(20),
    paddingBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.WHITE_244,
    padding: scaledSize(10),
    borderRadius: scaledSize(15),
    marginBottom: 10,
  },
  icon: {
    width: scaledSize(36),
    height: scaledSize(36),
    resizeMode: 'contain',
    marginRight: scaledSize(20),
  },
  title: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 20,
  },
  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
  },

  checkboxContainer: {marginVertical: 15},

  checkedView: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
});

export default styles;
