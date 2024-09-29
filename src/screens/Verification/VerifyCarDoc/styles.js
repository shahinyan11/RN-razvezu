import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
  },
  bacButton: {
    marginRight: 12,
  },

  imgContainer: {
    flex: 1,
    alignItems: 'center',
  },

  img: {
    width: '100%',
    height: '100%',
    resizeMode: 'stretch',
  },
  whiteContainer: {
    backgroundColor: MAIN_COLORS.WHITE,
    borderTopLeftRadius: scaledSize(36),
    borderTopRightRadius: scaledSize(36),
    paddingHorizontal: scaledSize(20),
    paddingTop: 48,
    paddingBottom: 20,
    marginTop: -25,
  },

  title: {
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    letterSpacing: -0.3,
    marginBottom: 15,
  },

  text: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK_05,
    fontWeight: '400',
    letterSpacing: -0.3,
    marginBottom: 28,
  },
});

export default st;
