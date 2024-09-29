import {StyleSheet} from 'react-native';
import {MAIN_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  containerStyle: {
    backgroundColor: MAIN_COLORS.WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    paddingHorizontal: 4,
  },

  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: SIZES.S12,
  },
});

export default st;
