import {useEffect, useMemo, useRef, useState} from 'react';
import {CalendarList, LocaleConfig} from 'react-native-calendars';
import moment from 'moment';

import ScreenContainer from '@components/containers/ScreenContainer';
import {MAIN_COLORS} from '@constants/styles/colors';
import Button from '@components/buttons/Button';
import st from './styles';
import Header from '@components/screenHeaders/Header';
import {LOCALS_RU} from '@constants/calendar';
import {goBack} from '@navigation/RootNavigation';
import eventEmitter from '@services/eventEmmiter';
import EVENTS from '@constants/events';
import formatDatePeriod from '@utils/ formatDatePeriod';

LocaleConfig.locales.ru = LOCALS_RU;
LocaleConfig.defaultLocale = 'ru';

const Calendar = ({route}) => {
  const {singleDay, startDate, endDate} = route.params || {};
  const [selectedDays, setSelectedDays] = useState([]);
  const startDay = useRef('');
  const endDay = useRef('');

  useEffect(() => {
    if (singleDay) {
      startDay.current = startDate
        ? moment(startDate).format('YYYY-MM-DD')
        : moment().utc(true).format('YYYY-MM-DD');

      setSelectedDays([startDay.current]);

      return;
    }

    startDay.current = startDate
      ? moment(startDate).format('YYYY-MM-DD')
      : moment().utc(true).startOf('month').format('YYYY-MM-DD');

    endDay.current = endDate
      ? moment(endDate).format('YYYY-MM-DD')
      : moment().utc(true).format('YYYY-MM-DD');

    setPeriod();
  }, [singleDay, startDate, endDate]);

  const handleDayPress = ({dateString}) => {
    const diff = moment(dateString).diff(moment(startDay.current));

    if (startDay.current && diff > 0 && dateString !== endDay.current) {
      endDay.current = dateString;
      setPeriod();

      return;
    }

    startDay.current = dateString;
    endDay.current = '';

    setSelectedDays([dateString]);
  };

  const setPeriod = () => {
    const _selectedDays = [];

    const current = moment(startDay.current);
    const end = moment(endDay.current);

    while (end.diff(current) >= 0) {
      _selectedDays.push(current.format('YYYY-MM-DD'));
      current.add(1, 'day');
    }

    setSelectedDays(_selectedDays);
  };

  const onConfirm = () => {
    eventEmitter.emit(EVENTS.SELECT_DATE, {
      startDate: startDay.current,
      endDate: endDay.current,
    });

    goBack();
  };

  const markedDates = useMemo(() => {
    const obj = {};

    selectedDays.forEach((date, index) => {
      const startingDay = index === 0;
      const endingDay = index === selectedDays.length - 1;
      const selected = startingDay || endingDay;
      const color = selected ? MAIN_COLORS.BLACK : MAIN_COLORS.GREY_BTN_03;

      obj[date] = {
        color,
        startingDay,
        endingDay,
        selected,
        dotColor: 'transparent',
      };
    });

    return obj;
  }, [selectedDays]);

  const initialDate = useMemo(
    () => moment(startDate).format('YYYY-MM-DD'),
    [startDate],
  );

  const buttonText = formatDatePeriod({
    startDate: startDay.current,
    endDate: endDay.current,
  });

  return (
    <ScreenContainer
      HeaderComponent={
        <Header title="Выберите период" titleStyle={{textAlign: 'left'}} />
      }
      whiteContainerStyle={st.whiteContainer}>
      <CalendarList
        current={initialDate}
        onDayPress={handleDayPress}
        pastScrollRange={50}
        futureScrollRange={50}
        markingType={'period'}
        markedDates={markedDates}
        calendarStyle={st.calendar}
      />

      <Button
        text={buttonText}
        containerStyle={st.button}
        onPress={onConfirm}
      />
    </ScreenContainer>
  );
};

export default Calendar;
