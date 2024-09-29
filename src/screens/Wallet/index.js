import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchWalletInfo} from '@store/wallet/operations';
import {walletInfoSelector} from '@store/wallet/selectors';
import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import BalanceCard from '@components/cards/BalanceCard';
import Header from '@components/screenHeaders/Header';
import st from './styles';
import formatToDecimal from '@utils/formatToDecimal';

const Wallet = () => {
  const dispatch = useDispatch();
  const walletInfo = useSelector(walletInfoSelector);
  const {
    balance,
    profit_last_month,
    profit_month,
    quantity_points,
    total_transit_distance_km,
  } = walletInfo;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => dispatch(fetchWalletInfo());

  return (
    <ScreenScrollContainer
      HeaderComponent={<Header title="Кошелек" showBackIcon={false} />}
      onRefresh={getData}
      whiteContainerStyle={st.whiteContainer}>
      <BalanceCard
        balance={balance}
        profit_last_month={formatToDecimal(profit_last_month)}
        containerStyle={st.card}
      />
      <View style={st.bubblesRow}>
        <View style={st.bubble}>
          <Text style={st.label}>Доход мес.</Text>
          <Text style={st.boldText}>{formatToDecimal(profit_month)} ₽</Text>
        </View>
        <View style={st.divider} />
        <View style={st.bubble}>
          <Text style={st.label}>Кол. точек</Text>
          <Text style={st.boldText}>{quantity_points} шт</Text>
        </View>
        <View style={st.divider} />
        <View style={st.bubble}>
          <Text style={st.label}>Пробег, км</Text>
          <Text style={st.boldText}>
            {formatToDecimal(total_transit_distance_km)} км
          </Text>
        </View>
      </View>
    </ScreenScrollContainer>
  );
};

export default Wallet;
