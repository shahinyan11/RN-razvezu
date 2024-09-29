import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS} from '@constants/styles/colors';

const st = StyleSheet.create({
  container: {
    flex: 1,
  },

  map: {
    ...StyleSheet.absoluteFillObject,
  },

  cardContainer: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 30,
  },

  buttonsContainer: {
    position: 'absolute',
    bottom: scaledSize(220),
    right: scaledSize(20),
    zIndex: 999999,
  },

  button: {
    width: scaledSize(40),
    height: scaledSize(40),
    borderRadius: scaledSize(40),
    backgroundColor: MAIN_COLORS.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaledSize(8),
  },
});

export default st;
