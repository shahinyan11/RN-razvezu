import React, {useEffect, useRef, useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {FormikProvider, useFormik} from 'formik';
import {findNodeHandle, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import moment from 'moment';

import eventEmitter from '@services/eventEmmiter';
import userInfoValidation from '@validations/userInfoValidation';
import useHeaderAnimKeyboard from '@hooks/useHeaderAnimKeyboard';
import useScreenContainer from '@hooks/useScreenContainer';
import {userCreateRequest} from '@store/auth/operations';
import {fetchCities} from '@store/app/operations';
import SelectField from '@components/form/SelectField';
import RadioGroup from '@components/form/RadioGroup';
import ScreenHeader from '@components/ScreenHeader';
import TextField from '@components/form/TextField';
import DateField from '@components/form/DateField';
import Button from '@components/buttons/Button';
import st from './styles';
import EVENTS from '@constants/events';

const HEADER_HEIGHT = 72;

const UserInfo = () => {
  const scrollRef = useRef(undefined);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [city, setCity] = useState();
  const {animatedStyle} = useHeaderAnimKeyboard(HEADER_HEIGHT);
  const {containerStyle} = useScreenContainer();

  useEffect(() => {
    dispatch(fetchCities());

    eventEmitter.on(EVENTS.SELECT_DATE, data => {
      formik.setFieldValue(
        'birthday',
        moment(data.startDate).format('DD.MM.YYYY'),
      );
    });

    return () => eventEmitter.off(EVENTS.SELECT_DATE, () => {});
  }, []);

  const onSubmit = (values, formik) => {
    dispatch(userCreateRequest({params: values, formik}));
  };

  const formik = useFormik({
    onSubmit,
    validationSchema: userInfoValidation,
    enableReinitialize: true,
    initialValues: {
      last_name: '',
      first_name: '',
      middle_name: '',
      birthday: '',
      gender: '',
      city_id: undefined,
      driving_experience: '',
      email: '',
    },
  });

  const handleSelectCity = city => {
    formik.setFieldValue('city_id', city.city_id);
    setCity(city);
  };

  const onFocus = target => {
    const reactNode = findNodeHandle(target);
    scrollRef.current.scrollToFocusedInput(reactNode);
  };

  return (
    <View style={[st.screenContainer, containerStyle]}>
      <ScreenHeader
        text="1 из 2"
        animatedStyle={animatedStyle}
        showBackIcon={false}
      />
      <View style={st.whiteContainer}>
        <KeyboardAwareScrollView
          ref={scrollRef}
          extraHeight={130}
          keyboardOpeningTime={300}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={st.keyboardContainer}>
          <FormikProvider value={formik}>
            <Text style={st.title}>Введите данные о себе</Text>
            <Text style={st.text}>
              Данные необходимы для рассмотрения вашей заявки, они будут надежно
              защищены
            </Text>
            <TextField
              name="last_name"
              placeholder={'Фамилия'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <TextField
              name="first_name"
              placeholder={'Имя'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <TextField
              name="middle_name"
              placeholder={'Отчество'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <DateField
              name="birthday"
              placeholder={'Укажите дату рождения'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />

            <RadioGroup name={'gender'} containerStyle={st.inputContainer} />
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
            <TextField
              name="driving_experience"
              keyboardType={'numeric'}
              placeholder={'Укажите водительский стаж'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <TextField
              name="email"
              placeholder={'Введите E-mail'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
          </FormikProvider>
        </KeyboardAwareScrollView>
      </View>
      <View style={st.button}>
        <Button text={'Далее'} onPress={formik.handleSubmit} />
      </View>
    </View>
  );
};

export default UserInfo;
