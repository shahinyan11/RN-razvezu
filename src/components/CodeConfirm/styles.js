import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '../../constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  root: {
    flex: 1,
    padding: 20,
  },

  cell: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 1,
    borderColor: MAIN_COLORS.BLACK_05,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  focusCell: {
    borderColor: '#000',
  },
  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
  },
});

export default st;
