import {StyleSheet} from 'react-native';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    marginLeft: -12,
    marginTop: 2,
  },
  avatarWrapper: {
    borderRadius: scaledSize(7),
    borderWidth: 0,
  },
  avatarImage: {
    borderWidth: 0,
    borderRadius: scaledSize(7),
  },
  avatarText: {
    position: 'absolute',
    bottom: 2,
    paddingVertical: 4,
    paddingHorizontal: 6,
    textAlign: 'left',
    backgroundColor: MAIN_COLORS.BLACK_05,
    color: TEXT_COLORS.WHITE,
    fontSize: SIZES.S14,
    fontWeight: '600',
    width: scaledSize(100),
    alignSelf: 'center',
    borderBottomLeftRadius: scaledSize(7),
    borderBottomRightRadius: scaledSize(7),
  },
});

export default st;
