import React, {useRef} from 'react';
import {findNodeHandle, Text, View} from 'react-native';
import {FormikProvider, useFormik} from 'formik';
import {useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import carInfoValidation from '@validations/carInfoValidation';
import {carCreateRequest} from '@store/auth/operations';
import ScreenHeader from '@components/ScreenHeader';
import TextField from '@components/form/TextField';
import Button from '@components/buttons/Button';
import TextSup from '@components/TextSup';
import st from './styles';
import useHeaderAnimKeyboard from '@hooks/useHeaderAnimKeyboard';
import useScreenContainer from '@hooks/useScreenContainer';
import NumberField from '@components/form/NumberField';

const HEADER_HEIGHT = 72;

const CarInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const {animatedStyle} = useHeaderAnimKeyboard(HEADER_HEIGHT);
  const {containerStyle} = useScreenContainer();

  const onSubmit = (values, formik) => {
    dispatch(carCreateRequest({params: values, formik}));
  };

  const formik = useFormik({
    onSubmit,
    validationSchema: carInfoValidation,
    enableReinitialize: true,
    initialValues: {
      brand: '',
      car_number: '',
      year: '',
      mileage: '',
      engine_size: '',
      height_m: '',
      depth_m: '',
      width_m: '',
      weight_kg: '',
    },
  });

  const onFocus = target => {
    const reactNode = findNodeHandle(target);
    scrollRef.current.scrollToFocusedInput(reactNode);
  };

  return (
    <View style={[st.ScreenScrollContainer, containerStyle]}>
      <ScreenHeader text="2 из 2" animatedStyle={animatedStyle} />
      <View style={st.whiteContainer}>
        <KeyboardAwareScrollView
          ref={scrollRef}
          extraHeight={130}
          contentContainerStyle={st.keyboardContainer}>
          <FormikProvider value={formik}>
            <Text style={st.title}>Введите данные авто</Text>
            <Text style={st.text}>
              Данные необходимы для рассмотрения вашей заявки, они будут надежно
              защищены
            </Text>
            <TextField
              name="brand"
              placeholder={'Укажите марку автомобиля'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <TextField
              name="car_number"
              placeholder={'Укажите номер автомобиля'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <TextField
              name="year"
              keyboardType={'numeric'}
              maxLength={4}
              placeholder={'Укажите год выпуска автомобиля'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <TextField
              name="mileage"
              placeholder={'Укажите пробег'}
              containerStyle={st.inputContainer}
              addAfter={<Text style={st.measurement}>КМ</Text>}
              onFocus={onFocus}
            />
            <TextField
              name="engine_size"
              placeholder={'Укажите объем двигателя'}
              containerStyle={st.inputContainer}
              addAfter={<Text style={st.measurement}>Л.</Text>}
              onFocus={onFocus}
            />
            <NumberField
              name="width_m"
              placeholder={'Ширина грузового пространства'}
              containerStyle={st.inputContainer}
              addAfter={<TextSup text={'М'} />}
              onFocus={onFocus}
            />
            <NumberField
              name="height_m"
              placeholder={'Высота грузового пространства'}
              containerStyle={st.inputContainer}
              addAfter={<TextSup text={'М'} />}
              onFocus={onFocus}
            />
            <NumberField
              name="depth_m"
              placeholder={'Длина грузового пространства'}
              containerStyle={st.inputContainer}
              addAfter={<TextSup text={'М'} />}
              onFocus={onFocus}
            />
            <NumberField
              name="weight_kg"
              placeholder={'Грузоподъемность'}
              containerStyle={st.inputContainer}
              addAfter={<TextSup text={'Kg'} />}
              onFocus={onFocus}
            />
          </FormikProvider>
        </KeyboardAwareScrollView>
      </View>
      <View style={st.button}>
        <Button text={'Отправить на проверку'} onPress={formik.handleSubmit} />
      </View>
    </View>
  );
};

export default CarInfo;
