import {StyleSheet} from 'react-native';
import {
  BUTTON_COLORS,
  MAIN_COLORS,
  TEXT_COLORS,
} from '@constants/styles/colors';
import {SIZES} from '@constants/styles/texts';
import {scaledSize} from '@utils/scaledSizes';

const st = StyleSheet.create({
  container: {
    backgroundColor: MAIN_COLORS.WHITE_244,
    padding: 2,
    borderRadius: 20,
  },
  whiteView: {
    paddingHorizontal: 10,
    paddingVertical: 14,
    borderRadius: 18,
    backgroundColor: MAIN_COLORS.WHITE,
  },

  completedView: {
    backgroundColor: MAIN_COLORS.WHITE_244,
  },

  name: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S20,
    lineHeight: SIZES.S20 * 1.4,
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'capitalize',
  },

  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '100%',
  },

  rowItem: {
    paddingVertical: 4,
    marginRight: scaledSize(4),
    paddingHorizontal: scaledSize(8),
    borderWidth: 1,
    borderRadius: 58,
    borderColor: MAIN_COLORS.GREY_BTN_03,
    marginBottom: 6,
  },

  text: {
    fontSize: SIZES.S14,
    color: TEXT_COLORS.BLACK_05,
  },

  rowItemLast: {
    marginRight: 0,
  },

  earnings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingTop: 7,
    borderTopWidth: 1,
    borderTopColor: MAIN_COLORS.WHITE_232,
  },

  label: {
    color: TEXT_COLORS.BLACK_05,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '600',
  },

  amount: {
    color: TEXT_COLORS.BLACK,
    fontSize: SIZES.S16,
    lineHeight: SIZES.S16 * 1.4,
    fontWeight: '600',
  },

  bottom: {
    paddingHorizontal: 8,
    // flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    minHeight: 50,
  },

  button: {
    height: 40,
    alignSelf: 'flex-end',
    marginBottom: 10,
  },

  buttonContainer: {
    width: '100%', // Ширина контейнера равна ширине родительского элемента
    marginBottom: 10, // Отступ между кнопками
  },

  grayButton: {
    height: 40,
    flex: 0.49,
    backgroundColor: BUTTON_COLORS.GREY_BTN,
  },

  buttonText: {
    fontSize: SIZES.S14,
    lineHeight: SIZES.S14 * 1.4,
  },
});

export default st;
