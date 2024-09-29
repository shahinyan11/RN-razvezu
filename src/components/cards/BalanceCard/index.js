import React from 'react';
import {Text, View} from 'react-native';

import st from './styles';
import {IconCard, IconWallet} from '@assets/svgs/other';
import {IconSignDown} from '@assets/svgs/vectors';
import {useNavigation} from '@react-navigation/native';
import ButtonContainer from '@components/buttons/ButtonContainer';

const BalanceCard = ({containerStyle, balance, profit_last_month}) => {
  const navigation = useNavigation();

  const onPressTransactions = () => {
    navigation.navigate('WalletStack', {screen: 'Transactions'});
  };

  const onPressWithdrawal = () => {
    navigation.navigate('WithdrawalModal', {balance});
  };

  const onPressAttachCard = () => {
    navigation.navigate('AttachCardModal');
  };

  return (
    <View style={[st.container, containerStyle]}>
      <View style={st.whiteContainer}>
        <Text style={st.text}>Баланс</Text>
        <Text style={st.amount}>{balance} ₽</Text>
        <Text style={st.text}>{profit_last_month} ₽ за последний месяц</Text>
      </View>
      <View style={st.row}>
        <View>
          <ButtonContainer style={st.blackCircle} onPress={onPressTransactions}>
            <IconWallet />
          </ButtonContainer>
          <Text style={st.blackText}>{'Все\nоперации'}</Text>
        </View>
        <View>
          <ButtonContainer style={st.blackCircle} onPress={onPressWithdrawal}>
            <IconSignDown />
          </ButtonContainer>
          <Text style={st.blackText}>{'Вывод'}</Text>
        </View>
        <View>
          <ButtonContainer style={st.blackCircle} onPress={onPressAttachCard}>
            <IconCard />
          </ButtonContainer>
          <Text style={st.blackText}>{'Привязать\nкарту'}</Text>
        </View>
      </View>
    </View>
  );
};
export default BalanceCard;
