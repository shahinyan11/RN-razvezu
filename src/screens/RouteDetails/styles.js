import {StyleSheet} from 'react-native';

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
    paddingHorizontal: 20,
    bottom: 16,
  },
});

export default st;
