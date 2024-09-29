import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import useScreenContainer from '@hooks/useScreenContainer';
import Checkbox from '@components/Checkbox';
import {FormikProvider, useFormik} from 'formik';
import TextAreaField from '@components/form/TextAreaField';
import st from './styles';
import Button from '@components/buttons/Button';
import {useDispatch, useSelector} from 'react-redux';
import {
  getOrderCancelReasonsRequest,
  locationCancelRequest,
} from '@store/locations/operations';
import {storeSelector} from '@store/locations/selectors';
import locationCancelValidation from '@validations/locationCancelValidation';
import {locationCancelEndpoint} from '@store/locations/endpoints';
import {selectLoaders} from '@store/loader/selectors';

const OrderCancelModal = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const {currentLocation, cancelReasons} = useSelector(storeSelector);
  const loaders = useSelector(selectLoaders);
  const {endpoint} = locationCancelEndpoint;

  useEffect(() => {
    dispatch(getOrderCancelReasonsRequest());
  }, []);

  const formik = useFormik({
    onSubmit: values => dispatch(locationCancelRequest(values)),
    validationSchema: locationCancelValidation,
    enableReinitialize: true,
    validateOnMount: true,
    initialValues: {
      location_id: currentLocation.location_id,
      reason_id: null,
      comment: '',
    },
  });

  const onSelect = id => () => formik.setFieldValue('reason_id', id);

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <FormikProvider value={formik}>
      <View style={st.container}>
        <BottomSheet
          index={0}
          topInset={containerStyle.paddingTop}
          snapPoints={['95%']}
          onClose={handleClose}
          backgroundStyle={st.sheetBackground}
          handleIndicatorStyle={st.indicator}
          enablePanDownToClose={true}>
          <View style={st.content}>
            <Text style={st.title}>
              {'Расскажите, почему\nотменяете заказ'}
            </Text>

            <BottomSheetScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={st.scrollContainer}>
              {cancelReasons.map(item => (
                <Checkbox
                  size={24}
                  text={item.message}
                  textStyle={st.text}
                  containerStyle={st.checkboxContainer}
                  innerIconStyle={st.innerIconStyle}
                  checkedViewStyle={st.checkedViewStyle}
                  isChecked={formik.values.reason_id === item.id}
                  onPress={onSelect(item.id)}
                />
              ))}
            </BottomSheetScrollView>
            <View style={st.bottom}>
              <TextAreaField
                name={'comment'}
                label={'Мой комментрий'}
                placeholder={'Введите текст'}
                labelStyle={st.label}
              />
              <Button
                text="Отменить заказ"
                containerStyle={st.button}
                onPress={formik.handleSubmit}
                isLoading={loaders[endpoint]}
                disabled={!formik.isValid}
              />
            </View>
          </View>
        </BottomSheet>
      </View>
    </FormikProvider>
  );
};

export default OrderCancelModal;
