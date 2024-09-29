import React from 'react';
import {Text, View} from 'react-native';

import st from './styles';
import Button from '@components/buttons/Button';
import {depotAccessRequest} from '@store/depots/operations';
import {useDispatch} from 'react-redux';
import {ACTIVE_OPACITY} from '@constants/index';
import {SvgUri} from 'react-native-svg';
import {DEPOT_STATUSES} from '@constants/status';
import formatToDecimal from '@utils/formatToDecimal';

const DepotCard = ({
  containerStyle,
  depot_id,
  name,
  logo,
  address,
  average_points,
  average_profit,
  loading_time,
  status,
}) => {
  const dispatch = useDispatch();

  const handleRequestAccess = () => {
    dispatch(depotAccessRequest(depot_id));
  };

  return (
    <View style={[st.container, containerStyle]} activeOpacity={ACTIVE_OPACITY}>
      <View style={st.row}>
        <View style={st.logo}>
          <SvgUri width={48} height={48} uri={logo} />
        </View>
        <View style={{flexShrink: 1}}>
          <Text style={st.name}>{name}</Text>
          <Text style={st.address}>{address}</Text>
        </View>
      </View>
      {status === DEPOT_STATUSES.CONFIRMED && (
        <View style={st.infoContainer}>
          <View style={st.whiteBox}>
            <Text style={st.number}>
              ~ {formatToDecimal(average_points) || '0'}
            </Text>
            <Text style={st.smallText}>Точек в маршруте</Text>
          </View>
          <View style={st.whiteBox}>
            <Text style={st.number}>
              ~ {formatToDecimal(average_profit) || '0'} ₽
            </Text>
            <Text style={st.smallText}>Маршрут</Text>
          </View>
        </View>
      )}
      {status !== DEPOT_STATUSES.CONFIRMED && (
        <Button
          theme={'white'}
          containerStyle={st.button}
          textStyle={st.buttonText}
          onPress={handleRequestAccess}
          disabled={status !== DEPOT_STATUSES.NO_REQUEST}
          text={
            status === DEPOT_STATUSES.NO_REQUEST
              ? 'Запросить доступ'
              : 'Заявка отправлена'
          }
        />
      )}
    </View>
  );
};
export default DepotCard;
