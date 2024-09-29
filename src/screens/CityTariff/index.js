import React, {useEffect, useMemo, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {fetchCities} from '@store/app/operations';
import {FormikProvider, useFormik} from 'formik';
import userInfoValidation from '@validations/userInfoValidation';
import SelectField from '@components/form/SelectField';
import {imgCityTariff} from '@assets/images';
import st from './styles';
import {selectCities} from '@store/app/selectors';
import useScreenContainer from '@hooks/useScreenContainer';
import {useNavigation} from '@react-navigation/native';

const CityTariff = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const [city, setCity] = useState();
  const cities = useSelector(selectCities);

  useEffect(() => {
    dispatch(fetchCities());
  }, []);

  useEffect(() => {
    formik.setFieldValue('city_id', cities[0]?.city_id);
    setCity(cities[0]);
  }, [cities]);

  const onSubmit = () => {};

  const formik = useFormik({
    onSubmit,
    validationSchema: userInfoValidation,
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: {
      city_id: undefined,
    },
  });

  const handleSelectCity = data => {
    formik.setFieldValue('city_id', data.city_id);
    setCity(data);
  };

  const pointPrice = useMemo(
    () => city?.point.price * city?.point.average_quantity,
    [city],
  );

  const kmPrice = useMemo(
    () => city?.km.price * city?.km.average_quantity,
    [city],
  );

  return (
    <View style={[st.container, containerStyle]}>
      <View style={st.imgContainer}>
        <Image source={imgCityTariff} style={st.img} />
      </View>
      <View style={[st.whiteContainer, {paddingBottom: 24}]}>
        <Text style={st.title}>Тариф города</Text>
        <FormikProvider value={formik}>
          <SelectField
            name="city_id"
            displayValue={city?.name}
            containerStyle={st.inputContainer}
            placeholder={'Введите город'}
            onPress={() => {
              navigation.navigate('CountriesModal', {
                onSelect: handleSelectCity,
                selected: city?.city_id,
              });
            }}
          />
        </FormikProvider>
        <View style={st.infoBox}>
          <Text style={st.textBold}>Примерный расчет</Text>
          <Text
            style={
              st.text
            }>{`в среднем ${city?.point.average_quantity} точек, ${city?.km.average_quantity} км пробега`}</Text>
          <View style={st.row}>
            <View style={st.priceInfo}>
              <Text style={st.textBold}>{city?.km.price}</Text>
              <Text style={st.textMini}>Цена за 1 точку, руб</Text>
            </View>
            <View style={st.priceInfo}>
              <Text style={st.textBold}>{city?.point.price}</Text>
              <Text style={st.textMini}>Цена за 1 км, руб</Text>
            </View>
          </View>
          <View style={st.totalView}>
            <Text style={st.totalText}>Итого</Text>
            <Text style={st.textBold}>{kmPrice + pointPrice} руб.</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CityTariff;
