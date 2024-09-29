import {StyleSheet} from 'react-native';

import {MAIN_COLORS} from '@constants/styles/colors';

const styles = StyleSheet.create({
  innerIconStyle: {
    backgroundColor: MAIN_COLORS.WHITE,
  },
  text: {
    textDecorationLine: 'none',
  },
  checkedView: {
    height: 6,
    width: 6,
    borderRadius: 6,
    backgroundColor: MAIN_COLORS.BLACK,
  },
});

export default styles;
