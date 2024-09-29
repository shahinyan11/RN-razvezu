import {StyleSheet} from 'react-native';

import {TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  stepView: {
    height: scaledSize(60),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scaledSize(20),
  },
  leftView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: 'center',
  },
  stepText: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.3,
  },
});

export default st;
