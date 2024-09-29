import React from 'react';
import {Text, View} from 'react-native';
import {maybeOpenURL} from 'react-native-app-link';
import {useDispatch, useSelector} from 'react-redux';

import st from './styles';
import Button from '@components/buttons/Button';
import {useNavigation} from '@react-navigation/native';
import TextSup from '@components/TextSup';
import moment from 'moment/moment';
import DATE_FORMATS from '@constants/dateFormats';
import {ROUTE_STATUSES} from '@constants/status';
import formatToDecimal from '@utils/formatToDecimal';
import {changeRouteStatusRequest} from '@store/routes/operations';
import {selectLoaders} from '@store/loader/selectors';
import {changeRouteStatusEndpoint} from '@store/routes/endpoints';

const RouteCard = ({containerStyle, route, isActive}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {id, orders, status, amount, date, volume, distance} = route;
  const loaders = useSelector(selectLoaders);
  const {endpoint} = changeRouteStatusEndpoint;

  const handleTakeOrder = async () => {
    maybeOpenURL('Yandex.Courier://', {
      appName: 'Yandex.Courier',
      appStoreId: 'com.yandex.mobile.b2bgeo.courier',
      playStoreId: 'com.yandex.courier',
    }).catch(err => {
      console.log('Yandex courier linking', err);
    });
  };

  const onPressMore = () => {
    navigation.navigate('RouteDetails', {id});
  };

  const onPressStartRoute = () => {
    dispatch(
      changeRouteStatusRequest({
        status: ROUTE_STATUSES.PROGRESS,
        route_id: id,
      }),
    ).then(success => {
      console.log(success);
      if (success) {
        navigation.navigate('RouteDetails', {id});
      }
    });
  };

  const weekDay = moment(date, 'DD/MM/YYYY').calendar(DATE_FORMATS.WEEK_DAY);
  return (
    <View style={[st.container, containerStyle]}>
      <View style={[st.whiteView, !isActive && st.completedView]}>
        <Text style={st.name}>
          Маршрут №{id} {weekDay}, {date}
        </Text>
        <View style={st.row}>
          <Text style={st.rowItem}>{`${formatToDecimal(
            distance,
          )} км пробега`}</Text>
          <Text style={st.rowItem}>{orders} пунктов</Text>
          <TextSup
            containerStyle={st.rowItem}
            textStyle={st.text}
            text={`Объем ${formatToDecimal(volume)} M`}
            sup={3}
          />
          <Text style={st.rowItem}>{route.package} коробок</Text>
          <Text style={st.rowItem}>{route.weight_kg} кг</Text>
        </View>
        <View style={st.earnings}>
          <Text style={st.label}>{isActive ? 'Предварительно' : 'Итог'}</Text>
          <Text style={st.amount}>{amount} руб.</Text>
        </View>
      </View>

      {isActive && (
        <View style={st.bottom}>
          <Button
            text="Подробнее"
            theme="transparent"
            containerStyle={st.button}
            onPress={onPressMore}
          />
          {status === ROUTE_STATUSES.NEW && (
            <Button
              text="Начать маршрут"
              containerStyle={st.button}
              isLoading={loaders[endpoint]}
              onPress={onPressStartRoute}
            />
          )}
        </View>
      )}
    </View>
  );
};
export default RouteCard;
