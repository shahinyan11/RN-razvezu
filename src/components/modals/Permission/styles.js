import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLORS.WHITE,
    paddingHorizontal: scaledSize(20),
    paddingTop: 24,
  },

  title: {
    fontSize: SIZES.S32,
    fontWeight: 600,
    textAlign: 'center',
    color: TEXT_COLORS.BLACK,
    marginBottom: 30,
  },
  section: {
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: MAIN_COLORS.GREY_BTN_03,
    marginBottom: 4,
  },
  text: {
    fontSize: SIZES.S16,
    fontWeight: 400,
    color: TEXT_COLORS.BLACK,
  },
  textLight: {
    fontSize: SIZES.S12,
    fontWeight: 400,
    color: MAIN_COLORS.BLACK_05,
  },
  button: {
    marginTop: 'auto',
    marginBottom: 20,
  },
});

export default st;
