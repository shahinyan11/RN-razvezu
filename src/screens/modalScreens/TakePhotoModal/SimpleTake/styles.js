import {StyleSheet} from 'react-native';
import {MAIN_COLORS} from '@constants/styles/colors';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  overlay: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    paddingBottom: 44,
    top: 0,
    left: 0,
  },

  captureButton: {
    marginTop: 'auto',
    width: 67,
    height: 67,
    borderWidth: 5,
    borderRadius: 67,
    borderColor: MAIN_COLORS.WHITE,
  },
  image: {
    width: scaledSize(300),
    height: scaledSize(450),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default st;
