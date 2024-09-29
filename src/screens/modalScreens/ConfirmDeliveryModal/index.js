import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';

import {currentLocationSelector} from '@store/locations/selectors';
import {locationConfirmRequest} from '@store/locations/operations';
import CodeConfirm from '@components/CodeConfirm';
import Button from '@components/buttons/Button';
import st from './styles';
import Loader from '@components/Loader';
import {selectLoaders} from '@store/loader/selectors';
import {locationConfirmEndpoint} from '@store/locations/endpoints';

const ConfirmDeliveryModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [code, setCode] = useState('');
  const {location_id, is_sign, is_code} = useSelector(currentLocationSelector);
  const loaders = useSelector(selectLoaders);
  const {endpoint} = locationConfirmEndpoint;

  useEffect(() => {
    if (code.length === 4) {
      dispatch(locationConfirmRequest({code, location_id}));
    }
  }, [code, location_id, dispatch]);

  const handleClose = () => {
    navigation.goBack();
  };

  const onButtonPress = () => navigation.navigate('SignatureModal');

  return (
    <View style={st.container}>
      <BottomSheet
        onClose={handleClose}
        enableDynamicSizing={true}
        enablePanDownToClose={true}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}>
        <BottomSheetView style={st.content}>
          <Text style={st.title}>Подтверждение действия</Text>
          <Text style={st.text}>
            Введите СМС-код, который был отправлен на номер телефона клиента
          </Text>
          {is_code && (
            <CodeConfirm
              containerStyle={st.codeConfirm}
              autoFocus={false}
              value={code}
              onChangeText={setCode}
            />
          )}
          {loaders[endpoint] && <Loader />}

          {is_sign && (
            <Button
              theme="transparent"
              onPress={onButtonPress}
              text="Нет доступа к телефону"
              containerStyle={st.button}
            />
          )}
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default ConfirmDeliveryModal;
