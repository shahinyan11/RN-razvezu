import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';

const st = StyleSheet.create({
  container: {
    borderRadius: scaledSize(45),
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    backgroundColor: MAIN_COLORS.WHITE_244,
    marginHorizontal: scaledSize(20),
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTab: {
    backgroundColor: MAIN_COLORS.BLACK,
  },
  tabLabel: {
    fontSize: SIZES.S14,
    fontWeight: '600',
    color: TEXT_COLORS.GREY_BTN,
  },
  activeTabLabel: {
    color: TEXT_COLORS.WHITE,
  },
});

export default st;
