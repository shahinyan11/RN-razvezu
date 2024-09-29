import {StyleSheet} from 'react-native';
import {MAIN_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  bubblesRow: {
    flexDirection: 'row',
    marginTop: 12,
    marginBottom: 34,
  },

  bubble: {
    flex: 1,
    padding: 8,
    borderRadius: 8,
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  label: {
    fontSize: SIZES.S14,
    fontWeight: '400',
    color: MAIN_COLORS.BLACK_05,
    marginBottom: 8,
  },

  boldText: {
    fontSize: SIZES.S16,
    fontWeight: '600',
    color: MAIN_COLORS.BLACK,
  },

  divider: {
    width: 4,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  historyText: {
    fontSize: SIZES.S20,
    fontWeight: '600',
    letterSpacing: -0.3,
    color: MAIN_COLORS.BLACK,
  },

  button: {
    position: 'absolute',
    width: 124,
    bottom: 16,
    alignSelf: 'center',
  },
});

export default st;
