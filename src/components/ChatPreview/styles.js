import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    padding: 16,
    height: 76,
    flexDirection: 'row',
    backgroundColor: MAIN_COLORS.WHITE_244,
    borderRadius: 16,
  },

  preview: {
    borderRadius: 7,
    width: 44,
    height: 44,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },

  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  name: {
    flex: 0.85,
    fontWeight: '600',
    fontSize: SIZES.S20,
    color: MAIN_COLORS.BLACK,
  },

  date: {
    fontWeight: '400',
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    color: MAIN_COLORS.BLACK_05,
    letterSpacing: -0.3,
  },

  text: {
    flex: 0.85,
    fontWeight: '400',
    fontSize: SIZES.S16,
    color: MAIN_COLORS.BLACK_05,
    letterSpacing: -0.3,
  },
  unread: {
    height: 18,
    width: 18,
    borderRadius: 18,
    backgroundColor: MAIN_COLORS.BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 2,
  },
  count: {
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
    fontWeight: '500',
    color: TEXT_COLORS.WHITE,
  },
});

export default st;
