import {React} from 'react';
import {Platform} from 'react-native';
import {useDispatch} from 'react-redux';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FormikProvider, useFormik} from 'formik';
import BottomSheet, {
  BottomSheetTextInput,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import useScreenContainer from '@hooks/useScreenContainer';
import {withdrawalRequest} from '@store/wallet/operations';
import TextField from '@components/form/TextField';
import Button from '@components/buttons/Button';

import st from './styles';

const WithdrawalModal = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();

  const onSubmit = values => {
    dispatch(withdrawalRequest(values));
  };

  const {balance} = route.params;

  const formik = useFormik({
    onSubmit,
    // validationSchema: withdrawalValidation,
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: {
      amount: String(balance),
    },
  });

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
        keyboardBehavior={Platform.OS === 'ios' ? 'interactive' : 'fillParent'}
        keyboardBlurBehavior="none"
        android_keyboardInputMode="adjustResize"
        enableDynamicSizing={true}
        enablePanDownToClose={true}>
        <BottomSheetView style={st.content}>
          <FormikProvider value={formik}>
            <Text style={st.title}>Введите сумму вывода</Text>
            <Text style={st.text}>
              {'Ближайший вывод будет произведен \nв ближайшее время'}
            </Text>
            <TextField
              name={'amount'}
              InputComponent={BottomSheetTextInput}
              containerStyle={st.inputContainer}
              placeholder={'0'}
              keyboardType={'numeric'}
              addAfter={<Text>₽</Text>}
            />
            <Button
              containerStyle={st.button}
              text={'Вывести'}
              onPress={formik.handleSubmit}
            />
          </FormikProvider>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default WithdrawalModal;
