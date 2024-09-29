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
    zIndex: 9999999,
  },
  maskCont: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  captureButton: {
    height: 67,
    width: 67,
    borderWidth: 5,
    borderColor: MAIN_COLORS.WHITE,
    borderRadius: 67,
  },
  image: {
    width: scaledSize(300),
    height: scaledSize(450),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default st;
