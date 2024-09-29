import React, {useRef} from 'react';
import {findNodeHandle, Text, View} from 'react-native';
import {FormikProvider, useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import TextField from '@components/form/TextField';
import Button from '@components/buttons/Button';
import st from './styles';
import useScreenContainer from '@hooks/useScreenContainer';
import NumberField from '@components/form/NumberField';
import ieValidation from '@validations/ieValidation';
import {verifyIERequest} from '@store/user/operations';
import {selectLoaders} from '@store/loader/selectors';
import {verifyIEEndpoint} from '@store/user/endpoints';

const IE = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const {containerStyle} = useScreenContainer();
  const loaders = useSelector(selectLoaders);
  const {endpoint} = verifyIEEndpoint;

  const onSubmit = (values, formik) => {
    dispatch(verifyIERequest({params: values, formik}));
  };

  const formik = useFormik({
    onSubmit,
    validationSchema: ieValidation,
    enableReinitialize: true,
    validateOnMount: true,
    initialValues: {
      name: '',
      inn: '',
      ogrn: '',
      bank_bik: '',
      bank_acnt: '',
    },
  });

  const onFocus = target => {
    const reactNode = findNodeHandle(target);
    scrollRef.current.scrollToFocusedInput(reactNode);
  };

  return (
    <View style={[st.ScreenScrollContainer, containerStyle]}>
      <View style={st.whiteContainer}>
        <KeyboardAwareScrollView
          ref={scrollRef}
          extraHeight={200}
          contentContainerStyle={st.keyboardContainer}>
          <FormikProvider value={formik}>
            <Text style={st.title}>Введите данные ИП</Text>
            <Text style={st.text}>
              Данные необходимы для рассмотрения вашей заявки, они будут надежно
              защищены
            </Text>
            <TextField
              name="name"
              placeholder={'Наименование'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <NumberField
              name="inn"
              placeholder={'ИНН'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
            <NumberField
              name="ogrn"
              placeholder={'ОГРН'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />

            <NumberField
              name="bank_bik"
              placeholder={'БИК'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />

            <NumberField
              name="bank_acnt"
              placeholder={'Расчетный счет'}
              containerStyle={st.inputContainer}
              onFocus={onFocus}
            />
          </FormikProvider>
        </KeyboardAwareScrollView>
      </View>
      <View style={st.button}>
        <Button
          text={'Подтвердить'}
          onPress={formik.handleSubmit}
          disabled={!formik.isValid}
          isLoading={loaders[endpoint]}
        />
      </View>
    </View>
  );
};

export default IE;
