import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import TransactionCard from '@components/cards/TransactionCard';
import {selectWalletStore} from '@store/wallet/selectors';
import moment from 'moment';

import {MONTHS} from '@constants/index';
import st from './styles';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import eventEmitter from '@services/eventEmmiter';
import EVENTS from '@constants/events';
import formatDatePeriod from '@utils/ formatDatePeriod';
import {getWalletHistoryRequest} from '@store/wallet/operations';

const TabContent = ({route}) => {
  const accruals = route?.params?.accruals;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {transactions, transPagination} = useSelector(selectWalletStore);
  const [period, setPeriod] = useState({});

  useEffect(() => {
    eventEmitter.on(EVENTS.SELECT_DATE, data => {
      setPeriod(data);
    });

    return () => eventEmitter.off(EVENTS.SELECT_DATE, () => {});
  }, []);

  useFocusEffect(
    useCallback(() => {
      dispatch(
        getWalletHistoryRequest({
          accruals,
          start_date: period.startDate?.replace(/\-/g, '.'),
          end_date: period.endDate?.replace(/\-/g, '.'),
        }),
      );
    }, [accruals, period, dispatch]),
  );

  const onLoadMore = () => {
    if (transPagination.page <= transPagination.last_page) {
      dispatch(getWalletHistoryRequest({accruals}, true));
    }
  };

  const text = useMemo(() => {
    return accruals ? 'Начисления за ' : 'Списания за ';
  }, [accruals]);

  const openCalendar = () => {
    navigation.navigate('Calendar', period);
  };

  return (
    <View style={st.container}>
      <Text style={st.title}>
        {text}
        {period.startDate && (
          <Text onPress={openCalendar} style={st.period}>
            {formatDatePeriod(period)}
          </Text>
        )}
        {!period.startDate && (
          <Text onPress={openCalendar} style={st.month}>
            {MONTHS[moment().month()]}
          </Text>
        )}
      </Text>

      <FlatList
        data={transactions}
        onEndReachedThreshold={0.2}
        onEndReached={onLoadMore}
        renderItem={({item}) => (
          <TransactionCard {...item} containerStyle={st.cardContainer} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TabContent;
