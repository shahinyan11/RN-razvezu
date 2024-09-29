import {StyleSheet} from 'react-native';

import {MAIN_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 50,
  },
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

  scrollContainer: {
    paddingBottom: 40,
  },

  previewContainer: {
    marginBottom: 16,
  },

  title: {
    marginBottom: 15,
    fontSize: SIZES.S16,
    color: MAIN_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
  },

  photoButton: {
    marginBottom: 20,
  },

  submitButton: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 17,
    marginTop: 'auto',
  },
});

export default st;
