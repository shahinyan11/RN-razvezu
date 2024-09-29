import {StyleSheet} from 'react-native';
import {scaledSize} from '@utils/scaledSizes';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';

const styles = StyleSheet.create({
  container: {
    height: scaledSize(45),
    borderRadius: scaledSize(45),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  tabItem: {
    flex: 1,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: scaledSize(40),
  },

  tabItemText: {
    color: TEXT_COLORS.GREY_BTN,
  },

  activeTabItem: {
    flex: 1,
    borderRadius: scaledSize(45),
    alignItems: 'center',
    justifyContent: 'center',
    height: scaledSize(45),
    backgroundColor: MAIN_COLORS.BLACK,
  },

  activeTabItemText: {
    color: TEXT_COLORS.WHITE,
  },
});

export default styles;
