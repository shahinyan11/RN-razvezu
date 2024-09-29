import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
    maxWidth: '65%',
    backgroundColor: MAIN_COLORS.BLACK,
    borderRadius: 12,
    marginBottom: 22,
    marginRight: 'auto',
  },

  ownerContainer: {
    marginRight: 0,
    marginLeft: 'auto',
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  fileView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  fileInfoBox: {
    marginLeft: 12,
  },

  fileName: {
    fontWeight: '600',
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    color: TEXT_COLORS.WHITE,
    marginBottom: 2,
  },

  ownerFileName: {
    color: TEXT_COLORS.BLACK,
  },

  fileSize: {
    fontWeight: '500',
    fontSize: SIZES.S12,
    lineHeight: SIZES.S12 * 1.4,
    color: TEXT_COLORS.WHITE_075,
  },

  ownerFileSize: {
    color: TEXT_COLORS.BLACK_075,
  },

  image: {
    height: scaledSize(125),
    width: scaledSize(210),
    resizeMode: 'cover',
  },

  preview: {
    borderRadius: 7,
    width: 44,
    height: 44,
    marginRight: 12,
  },

  text: {
    fontWeight: '400',
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    color: TEXT_COLORS.WHITE,
    letterSpacing: -0.4,
  },

  ownerText: {
    color: TEXT_COLORS.BLACK,
  },

  dateContainer: {
    position: 'absolute',
    right: 15,
    bottom: 8,
  },
  date: {
    fontWeight: '400',
    fontSize: SIZES.S14,
    color: TEXT_COLORS.WHITE_075,
    letterSpacing: -0.3,
  },

  ownerDate: {
    color: TEXT_COLORS.BLACK_05,
  },
  loader: {
    marginRight: 3,
  },
});

export default st;
