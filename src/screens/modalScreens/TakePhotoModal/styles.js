import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {SCREEN_WIDTH} from '@constants/device';

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_COLORS.BLACK,
  },

  content: {
    flex: 1,
  },

  photoView: {
    flex: 1,
    flexDirection: 'row',
  },

  image: {
    width: SCREEN_WIDTH,
    resizeMode: 'contain',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  text: {
    color: TEXT_COLORS.WHITE,
    fontSize: SIZES.S20,
    fontWeight: '600',
  },
});

export default st;
