import {StyleSheet} from 'react-native';

import {MAIN_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {flex: 1},
  whiteContainer: {
    flex: 1,
    marginTop: 12,
    paddingTop: 16,
    width: '100%',
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
  },
  header: {
    backgroundColor: MAIN_COLORS.BLACK,
  },
});

export default st;
