import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: scaledSize(20),
  },
  cardContainer: {
    marginBottom: 12,
  },
  button: {
    position: 'absolute',
    width: 124,
    bottom: 16,
    alignSelf: 'center',
  },
});

export default st;
