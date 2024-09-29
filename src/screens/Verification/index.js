import React, {useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {
  CAR_DOC_NAMES,
  CAR_FLOW,
  CAR_NAMES,
  DRIVER_LICENSE_NAMES,
  PASSPORT_FLOW,
  PASSPORT_PHOTO_NAMES,
} from '@constants/verification';
import useScreenContainer from '@hooks/useScreenContainer';
import {sendToVerifyRequestEndpoint} from '@store/verification/endpoint';
import {
  selectCarDocPhotos,
  selectCarPhotos,
  selectDriverLicensePhotos,
  selectPassportPhotos,
} from '@store/verification/selectors';
import {sendToVerifyRequest} from '@store/verification/operations';
import {selectLoaders} from '@store/loader/selectors';
import {
  setCarDocPhotos,
  setCarPhotos,
  setDriverLicensePhotos,
  setPassportPhotos,
} from '@store/verification';
import TakePhotoButton from '@components/buttons/TakePhotoButton';
import ImagePreview from '@components/ImagePreview';
import Button from '@components/buttons/Button';
import st from './styles';

const Verification = ({navigation}) => {
  const dispatch = useDispatch();
  const {endpoint} = sendToVerifyRequestEndpoint();
  const {containerStyle} = useScreenContainer();
  const loaders = useSelector(selectLoaders);
  const passportPhotos = useSelector(selectPassportPhotos);
  const driverLicensePhotos = useSelector(selectDriverLicensePhotos);
  const carDocPhotos = useSelector(selectCarDocPhotos);
  const carPhotos = useSelector(selectCarPhotos);
  const [showError, setShowError] = useState(false);

  const onSubmit = () => {
    if (
      driverLicensePhotos[2] &&
      passportPhotos[3] &&
      carDocPhotos[2] &&
      carPhotos[4]
    ) {
      dispatch(sendToVerifyRequest());
      return;
    }

    setShowError(true);
  };

  const handlePress = screen => () => {
    navigation.navigate(screen);
  };

  const onChangePassportPhoto = key => () => {
    navigation.navigate('TakePhotoModal', {
      ...PASSPORT_FLOW[key],
      callback: photo => {
        passportPhotos[key] = {
          ...photo,
          display_name: PASSPORT_PHOTO_NAMES[key],
        };

        dispatch(setPassportPhotos(passportPhotos));
      },
    });
  };

  const onChangeDriverLicensePhoto = key => () => {
    navigation.navigate('TakePhotoModal', {
      ...PASSPORT_FLOW[key],
      callback: photo => {
        driverLicensePhotos[key] = {
          ...photo,
          display_name: DRIVER_LICENSE_NAMES[key],
        };

        dispatch(setDriverLicensePhotos(driverLicensePhotos));
      },
    });
  };

  const onChangeCarDocPhoto = key => () => {
    navigation.navigate('TakePhotoModal', {
      ...PASSPORT_FLOW[key],
      callback: photo => {
        carDocPhotos[key] = {
          ...photo,
          display_name: CAR_DOC_NAMES[key],
        };

        dispatch(setCarDocPhotos(carDocPhotos));
      },
    });
  };

  const onChangeCarPhoto = key => () => {
    navigation.navigate('TakePhotoModal', {
      ...CAR_FLOW[key],
      callback: photo => {
        carPhotos[key] = {
          ...photo,
          display_name: CAR_NAMES[key],
        };

        dispatch(setCarPhotos(carPhotos));
      },
    });
  };

  return (
    <View style={containerStyle}>
      <View style={st.whiteContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={st.scrollContainer}>
          <Text style={st.title}>Паспорт</Text>
          {Object.entries(passportPhotos).map(([key, value]) => (
            <ImagePreview
              key={key}
              data={value}
              containerStyle={st.previewContainer}
              onChange={onChangePassportPhoto(key)}
            />
          ))}
          {!passportPhotos[3] && (
            <TakePhotoButton
              containerStyle={st.photoButton}
              onPress={handlePress('VerifyPassport')}
              error={showError}
            />
          )}

          <Text style={st.title}>Водительское удостоверение</Text>
          {Object.entries(driverLicensePhotos).map(([key, value]) => (
            <ImagePreview
              key={key}
              data={value}
              containerStyle={st.previewContainer}
              onChange={onChangeDriverLicensePhoto(key)}
            />
          ))}
          {!driverLicensePhotos[2] && (
            <TakePhotoButton
              containerStyle={st.photoButton}
              onPress={handlePress('VerifyDriverLicense')}
              error={showError}
            />
          )}

          <Text style={st.title}>Свидетельство регистрации ТС</Text>
          {Object.entries(carDocPhotos).map(([key, value]) => (
            <ImagePreview
              key={key}
              data={value}
              containerStyle={st.previewContainer}
              onChange={onChangeCarDocPhoto(key)}
            />
          ))}
          {!carDocPhotos[2] && (
            <TakePhotoButton
              containerStyle={st.photoButton}
              onPress={handlePress('VerifyCarDoc')}
              error={showError}
            />
          )}

          <Text style={st.title}>Фото авто</Text>
          {Object.entries(carPhotos).map(([key, value]) => (
            <ImagePreview
              key={key}
              data={value}
              containerStyle={st.previewContainer}
              onChange={onChangeCarPhoto(key)}
            />
          ))}
          {!carPhotos[4] && (
            <TakePhotoButton
              containerStyle={st.photoButton}
              onPress={handlePress('VerifyCar')}
              error={showError}
            />
          )}
        </ScrollView>

        <Button
          text={'Отправить на проверку'}
          containerStyle={st.submitButton}
          onPress={onSubmit}
          isLoading={loaders[endpoint]}
        />
      </View>
    </View>
  );
};

export default Verification;
