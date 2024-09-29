import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import st from './styles';
import {IconRefill, IconWithdrawal} from '@assets/svgs/other';
import {ACTIVE_OPACITY} from '@constants/index';
import {TRANSACTIONS_STATUS} from '@constants/status';

const TransactionCard = ({
  containerStyle,
  amount,
  comment,
  type,
  date,
  status,
}) => {
  return (
    <TouchableOpacity
      style={[st.container, containerStyle]}
      activeOpacity={ACTIVE_OPACITY}>
      <View style={st.numberBox}>
        {type === 'refill' ? <IconRefill /> : <IconWithdrawal />}
      </View>
      <View style={{flex: 1}}>
        <View style={st.row}>
          <Text style={[st.name, type === 'refill' ? st.green : st.orange]}>
            {type === 'refill' ? '+' : '-'}
            {amount} ₽
          </Text>
          <Text style={st.comment}>
            {TRANSACTIONS_STATUS[status]}
            {new Date(date).toLocaleDateString('ru-RU')}
          </Text>
        </View>

        <View style={st.row}>
          <Text style={st.comment}>{comment}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default TransactionCard;
