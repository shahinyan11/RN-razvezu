import moment from 'moment';

const formatDatePeriod = data => {
  let res = '';

  const isStartInCurrentYear = moment(data.startDate).isSame(moment(), 'year');
  const isSameMonth = moment(data.startDate).isSame(data.endDate, 'month');
  const isEndInCurrentYear = moment(data.endDate).isSame(moment(), 'year');

  const startFormat =
    data.endDate && isSameMonth
      ? 'D'
      : isStartInCurrentYear && isEndInCurrentYear
      ? 'D MMM'
      : 'D MMM YYYY';

  res += moment(data.startDate).utc(true).format(startFormat);

  if (data.endDate) {
    const endFormat = isEndInCurrentYear ? 'D MMM' : 'D MMM YYYY';

    res += ` - ${moment(data.endDate).utc(true).format(endFormat)}`;
  }

  return res;
};

export default formatDatePeriod;
