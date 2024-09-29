const DATE_FORMATS = {
  DEFAULT: {
    sameDay: '[Сегодня]',
    nextDay: 'DD.MM',
    nextWeek: 'DD.MM',
    lastDay: 'DD.MM',
    lastWeek: 'DD.MM',
    sameElse: 'DD.MM',
  },

  WEEK_DAY: {
    sameDay: '[сегодня]',
    nextDay: '[завтра]',
    nextWeek: 'dddd',
    lastDay: '[вчера]',
    lastWeek: 'dddd',
    sameElse: 'dddd',
  },

  WEEK_MONTH_DAY: {
    sameDay: '[Сегодня] D MMMM',
    nextDay: '[Завтра] D MMMM',
    nextWeek: 'dddd D MMMM',
    lastDay: '[Вчера] D MMMM',
    lastWeek: 'dddd D MMMM',
    sameElse: 'dddd D MMMM',
  },
};

export default DATE_FORMATS;
