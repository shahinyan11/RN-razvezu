import {StyleSheet} from 'react-native';

import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    flex: 1,
  },

  whiteContainer: {
    paddingBottom: scaledSize(100),
  },
  tabContainer: {
    marginBottom: scaledSize(16),
  },
  cardContainer: {
    marginBottom: scaledSize(12),
  },

  mapButton: {
    width: '100%',
    overflow: 'hidden',
    height: scaledSize(95),
    borderRadius: scaledSize(24),
    marginBottom: scaledSize(12),
    justifyContent: 'center',
  },
  mapButtonImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },

  mapButtonOverlay: {
    flexDirection: 'row',
    marginHorizontal: scaledSize(20),
    justifyContent: 'space-between',
  },

  mapButtonText: {
    fontSize: SIZES.S20,
    fontWeight: '600',
    color: TEXT_COLORS.BLACK,
    width: scaledSize(200),
  },

  button: {
    position: 'absolute',
    marginHorizontal: scaledSize(20),
    bottom: scaledSize(16),
    alignSelf: 'center',
    backgroundColor: MAIN_COLORS.BLACK,
    marginBottom: 0,
  },

  boldTextStyle: {
    color: TEXT_COLORS.WHITE,
  },
  textStyle: {
    color: TEXT_COLORS.WHITE_05,
  },
});

export default st;
