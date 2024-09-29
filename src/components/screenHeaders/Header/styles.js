import {StyleSheet} from 'react-native';

import {TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    height: scaledSize(60),
    paddingHorizontal: scaledSize(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: SIZES.S28,
    fontWeight: '600',
    letterSpacing: -0.3,
    color: TEXT_COLORS.WHITE,
    textAlign: 'center',
    marginHorizontal: 15,
  },
  leftView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerView: {
    justifyContent: 'center',
  },
  stepText: {
    fontSize: SIZES.S20,
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.3,
  },
});

export default st;
