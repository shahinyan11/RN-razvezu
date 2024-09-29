import React, {useEffect} from 'react';
import {Alert, Linking, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormikProvider, useFormik} from 'formik';
import 'moment/locale/ru';

import {IconCall, IconNavigator} from '@assets/svgs/action';
import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import ButtonContainer from '@components/buttons/ButtonContainer';
import Button from '@components/buttons/Button';
import Copy from '@components/containers/Copy';
import {useDispatch, useSelector} from 'react-redux';
import {currentLocationSelector} from '@store/locations/selectors';
import {getLocationByIdRequest} from '@store/locations/operations';
import st from './styles';
import InfoHeader from '@components/screenHeaders/InfoHeader';
import TextAreaField from '@components/form/TextAreaField';
import {openBottomSheet} from '@store/modal';
import {locationConfirmRequest} from '@store/locations/operations';

const LocationDepot = ({route}) => {
  const {location_id} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const location = useSelector(currentLocationSelector);
  const {
    phone,
    address,
    time_window,
    arrival,
    apartment,
    intercom_code,
    entrance,
    comments,
    title,
    whom,
    instruction,
    coordinates,
  } = location;

  useEffect(() => {
    getData();
  }, []);

  const getData = () => dispatch(getLocationByIdRequest(location_id));

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      comment: '',
    },
  });

  const onNavigatorPress = async () => {
    dispatch(
      openBottomSheet({
        type: 'MAP_APPS',
        data: {locations: [coordinates]},
      }),
    );
  };

  const onCallPress = () => Linking.openURL(`tel:${phone}`);
  const onCancel = () => {
    Alert.alert('Невозможно отменить. Свяжитесь с поддержкой');
  };

  const onDeliveredPress = () => {
    Alert.alert('Вы действительно загрузились?', '', [
      {
        text: 'Подтвердить',
        onPress: () => dispatch(locationConfirmRequest({location_id})),
      },
      {
        text: 'Отменить',
        style: 'cancel',
      },
    ]);
  };

  const onReportProblemPress = () =>
    navigation.navigate('ExploreModal', {instruction});

  return (
    <View style={st.container}>
      <ScreenScrollContainer
        HeaderComponent={
          <InfoHeader title={`${title}`} text={`Название: ${whom}`} />
        }
        whiteContainerStyle={st.whiteContainer}
        onRefresh={getData}>
        <FormikProvider value={formik}>
          <Text style={st.h2}>Местное время посещения</Text>
          <View style={st.row}>
            <Copy style={st.rowItem} value={time_window}>
              <Text style={st.value}>{time_window || '--'}</Text>
              <Text style={st.label}>Загрузку ожидают</Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.rowItem} value={arrival}>
              <Text style={st.value}>{arrival || '--'}</Text>
              <Text style={st.label}>Прибытие</Text>
            </Copy>
          </View>
          <Copy style={[st.addressView, st.row]} value={address}>
            <View style={{flexShrink: 1}}>
              <Text style={st.label}>Адрес склада</Text>
              <Text style={st.value}>{address || '--'}</Text>
            </View>
            <ButtonContainer style={st.blackRound} onPress={onNavigatorPress}>
              <IconNavigator />
            </ButtonContainer>
          </Copy>
          <View style={st.row}>
            <Copy style={st.rowItem} value={apartment}>
              <Text style={st.label}>Квартира</Text>
              <Text style={st.value}>{apartment || '--'}</Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.rowItem} value={entrance}>
              <Text style={st.label}>Подъезд</Text>
              <Text style={st.value}>{entrance || '--'}</Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.rowItem} value={intercom_code}>
              <Text style={st.label}>Домофон</Text>
              <Text style={st.value}>{intercom_code || '--'}</Text>
            </Copy>
          </View>
          <Copy style={[st.addressView, st.row]} value={phone}>
            <View>
              <Text style={st.label}>Телефон</Text>
              <Text style={st.value}>{phone || '--'}</Text>
            </View>
            <ButtonContainer style={st.blackRound} onPress={onCallPress}>
              <IconCall />
            </ButtonContainer>
          </Copy>
          <Copy value={comments}>
            <Text style={[st.h2, st.mb8]}>Комментарий к складу</Text>
            <View style={st.orderComment}>
              <Text>{comments || '--'}</Text>
            </View>
          </Copy>
          <View style={[st.h2, st.mb8]}>
            <TextAreaField
              name={'comment'}
              label={'Мой комментрий'}
              placeholder={'Введите текст'}
              labelStyle={[st.h2, st.mb8]}
            />
          </View>

          <View style={[st.instruction]}>
            <Text style={st.boldText}>Инструкция</Text>
            <Text style={st.text}>
              Ознакомьтесь с инструкцией заранее, чтобы быть в курсе и процедур
              идействий
            </Text>

            <Button
              text={'Изучить материал'}
              theme={'transparent'}
              onPress={onReportProblemPress}
            />
          </View>
        </FormikProvider>
      </ScreenScrollContainer>
      <View style={st.bottomRow}>
        <Button
          text={'Отменить'}
          theme={'transparent'}
          onPress={onCancel}
          containerStyle={st.redButton}
          textStyle={st.redButtonText}
        />
        <Button
          theme={'green'}
          text={'Загрузился'}
          onPress={onDeliveredPress}
          containerStyle={st.greenButton}
        />
      </View>
    </View>
  );
};

export default LocationDepot;
