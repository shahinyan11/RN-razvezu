import {StyleSheet} from 'react-native';

import {MAIN_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  whiteContainer: {
    marginTop: 12,
    paddingTop: 24,
    flex: 1,
    width: '100%',
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
    paddingBottom: 40,
  },

  previewContainer: {
    marginBottom: 16,
  },
});

export default st;
