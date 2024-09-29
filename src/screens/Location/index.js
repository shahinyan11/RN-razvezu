import React, {useEffect, useRef} from 'react';
import {Alert, Linking, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormikProvider, useFormik} from 'formik';
import 'moment/locale/ru';

import {IconCall, IconNavigator} from '@assets/svgs/action';
import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import ButtonContainer from '@components/buttons/ButtonContainer';
import TextAreaField from '@components/form/TextAreaField';
import ImagePreview from '@components/ImagePreview';
import Button from '@components/buttons/Button';
import Copy from '@components/containers/Copy';
import {useDispatch, useSelector} from 'react-redux';
import {currentLocationSelector} from '@store/locations/selectors';
import {
  getLocationByIdRequest,
  locationPhotoRequest,
  locationStartRequest,
} from '@store/locations/operations';
import takePhotoPermission from '@utils/takePhotoPermission';
import st from './styles';
import {selectLoaders} from '@store/loader/selectors';
import {
  locationPhotoEndpoint,
  locationStartEndpoint,
} from '@store/locations/endpoints';
import InfoHeader from '@components/screenHeaders/InfoHeader';
import TakePhotoButton from '@components/buttons/TakePhotoButton';
import LocationPhotos from '@screens/Location/LocationPhotos';
import {isEmpty} from 'ramda';
import {openBottomSheet} from '@store/modal';
import {locationConfirmRequest} from '@store/locations/operations';

const Location = ({route}) => {
  const {location_id} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loaderId = useRef(undefined);
  const loaders = useSelector(selectLoaders);
  const {endpoint: photoEndpoint} = locationPhotoEndpoint;
  const {endpoint: startEndpoint} = locationStartEndpoint;
  const location = useSelector(currentLocationSelector);
  const {
    location_type,
    photo,
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
    coordinates,
    is_started,
    depth_m,
    height_m,
    width_m,
    volume_cbm,
    company_name,
    is_sign,
    is_code,
    location_photos = [],
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

  const uploadPhoto = ({id, file}) => {
    loaderId.current = id;

    dispatch(
      locationPhotoRequest({
        id,
        location_id,
        photo: file,
      }),
    );
  };

  const handleTakePhoto = id => async () => {
    const permission = await takePhotoPermission();

    if (permission) {
      navigation.navigate('TakePhotoModal', {
        callback: file => uploadPhoto({id, file}),
      });
    }
  };

  const handleStart = () => {
    dispatch(locationStartRequest({location_id, location_type}));
  };

  const onCallPress = () => Linking.openURL(`tel:${phone}`);
  const onCancel = () => navigation.navigate('OrderCancelModal');
  const onDeliveredPress = () => {
    if (is_sign || is_code) {
      navigation.navigate('ConfirmDeliveryModal');
    } else {
      Alert.alert('Вы действительно доставили?', '', [
        {
          text: 'Подтвердить',
          onPress: () => dispatch(locationConfirmRequest({location_id})),
        },
        {
          text: 'Отменить',
          style: 'cancel',
        },
      ]);
    }
  };

  const onReportProblemPress = () => navigation.navigate('ChatStack');

  const onNavigatorPress = async () => {
    dispatch(
      openBottomSheet({
        type: 'MAP_APPS',
        data: {locations: [coordinates]},
      }),
    );
  };

  return (
    <View style={st.container}>
      <ScreenScrollContainer
        HeaderComponent={
          <InfoHeader title={`Заказ ${title}`} text={`Клиент: ${whom}`} />
        }
        whiteContainerStyle={st.whiteContainer}
        onRefresh={getData}>
        <FormikProvider value={formik}>
          <Text style={st.h2}>Местное время доставки</Text>
          <View style={st.row}>
            <Copy style={st.greyContainer} value={time_window}>
              <Text style={st.value}>{time_window || '--'}</Text>
              <Text style={st.label}>Заказ ожидают</Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.greyContainer} value={arrival}>
              <Text style={st.value}>{arrival || '--'}</Text>
              <Text style={st.label}>Прибытие</Text>
            </Copy>
          </View>
          <Copy style={[st.greyContainer, st.row]} value={address}>
            <View style={{flexShrink: 1}}>
              <Text style={st.label}>Адрес доставки</Text>
              <Text style={st.value}>{address || '--'}</Text>
            </View>
            <ButtonContainer style={st.blackRound} onPress={onNavigatorPress}>
              <IconNavigator />
            </ButtonContainer>
          </Copy>
          <Copy style={[st.greyContainer, st.row]} value={address}>
            <View style={{flexShrink: 1}}>
              <Text style={st.label}>Отправитель</Text>
              <Text style={st.value}>{company_name || '--'}</Text>
            </View>
          </Copy>
          <View style={st.row}>
            <Copy style={st.greyContainer} value={apartment}>
              <Text style={st.label}>Квартира</Text>
              <Text style={st.value}>{apartment || '--'}</Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.greyContainer} value={entrance}>
              <Text style={st.label}>Подъезд</Text>
              <Text style={st.value}>{entrance || '--'}</Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.greyContainer} value={intercom_code}>
              <Text style={st.label}>Домофон</Text>
              <Text style={st.value}>{intercom_code || '--'}</Text>
            </Copy>
          </View>

          <Copy style={[st.greyContainer, st.row]} value={phone}>
            <View>
              <Text style={st.label}>Телефон</Text>
              <Text style={st.value}>{phone || '--'}</Text>
            </View>
            <ButtonContainer style={st.blackRound} onPress={onCallPress}>
              <IconCall />
            </ButtonContainer>
          </Copy>

          <View style={st.row}>
            <Copy style={st.greyContainer} value={apartment}>
              <Text style={st.label}>ШВД, см</Text>
              <Text style={st.value}>
                {(width_m * 100).toFixed() +
                  '×' +
                  (height_m * 100).toFixed() +
                  '×' +
                  (depth_m * 100).toFixed() || '--'}
              </Text>
            </Copy>
            <View style={st.divider} />
            <Copy style={st.greyContainer} value={intercom_code}>
              <Text style={st.label}>Объем, м3</Text>
              <Text style={st.value}>{volume_cbm?.toFixed(2) || '--'}</Text>
            </Copy>
          </View>

          {!isEmpty(location_photos) && (
            <View style={st.greyContainer}>
              <Text style={st.label}>Фото</Text>
              <LocationPhotos data={location_photos} />
            </View>
          )}

          <Copy value={comments}>
            <Text style={[st.h2, st.mb8]}>Комментарий к заказу</Text>
            <View style={st.orderComment}>
              <Text>{comments || '--'}</Text>
            </View>
          </Copy>

          {photo?.map(item => (
            <ImagePreview
              data={item}
              url={item.url}
              containerStyle={st.previewContainer}
              onChange={handleTakePhoto(item.id)}
              isLoading={item.id && loaderId.current === item.id}
            />
          ))}

          {location_type !== 'depot' && (
            <TakePhotoButton
              containerStyle={st.photoButton}
              onPress={handleTakePhoto()}
              isLoading={!loaderId.current && loaders[photoEndpoint]}
            />
          )}

          <TextAreaField
            name={'comment'}
            label={'Мой комментрий'}
            placeholder={'Введите текст'}
            labelStyle={[st.h2, st.mb8]}
          />
          <Button
            text={'Сообщить о проблеме'}
            theme={'transparent'}
            containerStyle={st.reportButton}
            onPress={onReportProblemPress}
          />
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
          text={is_started ? 'Доставлен' : 'Старт'}
          onPress={is_started ? onDeliveredPress : handleStart}
          containerStyle={st.greenButton}
          isLoading={loaders[startEndpoint]}
        />
      </View>
    </View>
  );
};

export default Location;
