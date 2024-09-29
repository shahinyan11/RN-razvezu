import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import SignatureCapture from 'react-native-signature-capture';

import useScreenContainer from '@hooks/useScreenContainer';
import Button from '@components/buttons/Button';
import st from './styles';
import BottomSheet from '@gorhom/bottom-sheet';
import {goBack} from '@navigation/RootNavigation';
import {IconTrash} from '@assets/svgs/action';
import {locationConfirmRequest} from '@store/locations/operations';
import {useDispatch, useSelector} from 'react-redux';
import * as RNFS from 'react-native-fs';
import getFileNameFromPath from '@utils/getFileNameFromPath';
import getImageType from '@utils/getImageType';
import {currentLocationSelector} from '@store/locations/selectors';
import {selectLoaders} from '@store/loader/selectors';
import {locationCancelEndpoint} from '@store/locations/endpoints';

const SignatureModal = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const signRef = useRef();
  const {location_id, whom, title, company_name} = useSelector(
    currentLocationSelector,
  );
  const loaders = useSelector(selectLoaders);
  const {endpoint} = locationCancelEndpoint;

  const onSaveEvent = ({pathName}) => {
    const path = `file://${pathName}`;

    RNFS.stat(path).then(() => {
      dispatch(
        locationConfirmRequest({
          location_id,
          sign: {
            name: getFileNameFromPath(path),
            type: getImageType(path),
            uri: path,
            // size: Math.round(fileStat.size / 1000),
          },
        }),
      );
    });
  };

  const onConfirm = () => signRef.current.saveImage();

  const resetSign = () => signRef.current.resetImage();

  const handleClose = () => navigation.goBack();

  return (
    <View style={st.container}>
      <BottomSheet
        index={0}
        topInset={containerStyle.paddingTop}
        snapPoints={['100%']}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        enablePanDownToClose={true}>
        <View style={st.content}>
          <Text style={st.title}>Распишитесь в указанной области</Text>
          <Text>Отправитель: {company_name}</Text>
          <Text>Номер заказа/Дата: {title}</Text>
          <Text>Получатель: {whom}</Text>
          <View style={st.desk}>
            <SignatureCapture
              style={{flex: 1}}
              ref={signRef}
              backgroundColor="transparent"
              strokeColor="black"
              minStrokeWidth={3}
              maxStrokeWidth={3}
              viewMode={'portrait'}
              showBorder={true}
              showTitleLabel={false}
              showNativeButtons={false}
              saveImageFileInExtStorage={true}
              onSaveEvent={onSaveEvent}
            />
            <IconTrash style={st.iconTrash} onPress={resetSign} />
          </View>
          <View style={st.bottom}>
            <Button
              onPress={goBack}
              theme="transparent"
              text="Назад"
              containerStyle={st.button}
            />
            <Button
              onPress={onConfirm}
              text="Подтвердить"
              containerStyle={st.button}
              isLoading={loaders[endpoint]}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SignatureModal;
