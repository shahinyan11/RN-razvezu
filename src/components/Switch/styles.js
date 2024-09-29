import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS} from '@constants/styles/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    backgroundColor: MAIN_COLORS.GREY_BTN,
    width: scaledSize(40),
    height: scaledSize(22),
    borderRadius: 55,
    justifyContent: 'center',
    padding: 3,
  },
  activeButton: {
    backgroundColor: MAIN_COLORS.BLACK,
    alignItems: 'flex-end',
  },
  buttonInner: {
    backgroundColor: 'white',
    width: scaledSize(16),
    height: scaledSize(16),
    borderRadius: scaledSize(16),
  },
  label: {
    marginLeft: 15,
  },
});

export default styles;
