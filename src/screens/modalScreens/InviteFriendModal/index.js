import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {Image, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormikProvider, useFormik} from 'formik';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';

import {inviteFriendRequest} from '@store/user/operations';
import useScreenContainer from '@hooks/useScreenContainer';
import PhoneField from '@components/form/PhoneField';
import TextField from '@components/form/TextField';
import Button from '@components/buttons/Button';
import st from './styles';
import {imgBalloon} from '@assets/images';

const InviteFriendModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const [success, setSuccess] = useState(false);

  const onSubmit = ({full_name, phone}) => {
    dispatch(
      inviteFriendRequest({
        full_name,
        phone: phone.unMasked,
      }),
    ).then(bool => {
      setSuccess(bool);
    });
  };

  const formik = useFormik({
    onSubmit,
    // validationSchema: withdrawalValidation,
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: {
      full_name: '',
      phone: '',
    },
  });

  const handleSendInvite = () => {
    if (success) {
      setSuccess(false);
      return;
    }

    formik.handleSubmit();
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        index={0}
        onClose={handleClose}
        topInset={containerStyle.paddingTop}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        keyboardBehavior="extend"
        enableDynamicSizing={true}
        enablePanDownToClose={true}>
        <BottomSheetView style={st.content}>
          <FormikProvider value={formik}>
            {!success && (
              <>
                <Text style={st.title}>Введите данные</Text>
                <TextField
                  name="full_name"
                  InputComponent={BottomSheetTextInput}
                  containerStyle={st.inputContainer}
                  placeholder={'Введите ФИО'}
                />

                <PhoneField
                  name="phone"
                  placeholderColor="Введите номер телефон"
                  placeholder={'Введите номер телефона'}
                  containerStyle={st.inputContainer}
                />
              </>
            )}

            {success && (
              <View style={{alignItems: 'center'}}>
                <Image source={imgBalloon} />
                <Text style={st.title}>Спасибо за приглашение!</Text>
                <Text style={st.text}>
                  В течение нескольких дней на ваш счет будет начислено 300
                  бонусов
                </Text>
              </View>
            )}

            <Button
              containerStyle={st.button}
              text={'Отправить приглашение'}
              onPress={handleSendInvite}
            />
          </FormikProvider>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default InviteFriendModal;
