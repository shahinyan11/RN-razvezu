import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {SIZES} from '@constants/styles/texts';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';

const st = StyleSheet.create({
  whiteContainer: {
    paddingTop: 20,
    paddingHorizontal: scaledSize(20),
  },
  h2: {
    marginTop: scaledSize(24),
    fontWeight: '600',
    fontSize: SIZES.S28,
    color: TEXT_COLORS.BLACK,
    letterSpacing: -0.3,
    marginBottom: 16,
  },

  menuItem: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    height: scaledSize(52),
    flexDirection: 'row',
    borderRadius: scaledSize(55),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: scaledSize(24),
    paddingRight: scaledSize(14),
    marginBottom: scaledSize(12),
  },

  inputLabel: {
    marginBottom: 4,
    marginLeft: 8,
    fontWeight: '500',
  },

  save: {
    color: TEXT_COLORS.GREEN,
    fontWeight: '500',
  },

  input: {
    flex: 1,
    color: TEXT_COLORS.BLACK,
  },

  logout: {
    alignSelf: 'center',
    marginTop: 'auto',
    padding: scaledSize(5),
    marginBottom: scaledSize(60),
  },
  logoutText: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.RED,
    fontWeight: '600',
    letterSpacing: -0.3,
  },
  inviteCard: {
    marginTop: 24,
    backgroundColor: MAIN_COLORS.WHITE_244,
    padding: scaledSize(16),
    borderRadius: scaledSize(24),
    paddingRight: 0,
    position: 'relative',
    justifyContent: 'center',
    marginBottom: 44,
  },
  boldText: {
    fontSize: SIZES.S16,
    color: TEXT_COLORS.BLACK,
    fontWeight: '600',
    marginBottom: 26,
  },
  button: {
    paddingHorizontal: scaledSize(12),
    paddingVertical: scaledSize(8),
    height: 'auto',
    width: undefined,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: SIZES.S12,
    flex: undefined,
  },
  image: {
    position: 'absolute',
    resizeMode: 'contain',
    height: scaledSize(170),
    width: scaledSize(170),
    right: 0,
    bottom: 0,
  },
});

export default st;
