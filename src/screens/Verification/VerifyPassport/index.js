import React, {useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import st from './styles';
import Button from '@components/buttons/Button';
import {useNavigation} from '@react-navigation/native';
import {PASSPORT_FLOW, PASSPORT_PHOTO_NAMES} from '@constants/verification';
import {IconBack} from '@assets/svgs/action';
import {useDispatch, useSelector} from 'react-redux';
import {setPassportPhotos} from '@store/verification';
import {selectPassportPhotos} from '@store/verification/selectors';
import {ACTIVE_OPACITY} from '@constants/index';
import {keys, last} from 'ramda';
import takePhotoPermission from '@utils/takePhotoPermission';

const VerifyPassport = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const passportPhotos = useSelector(selectPassportPhotos);
  const [step, setStep] = useState(+last(keys(passportPhotos)) + 1 || 1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${step} из 3`,
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleGoBack}
          style={st.bacButton}
          activeOpacity={ACTIVE_OPACITY}>
          <IconBack />
        </TouchableOpacity>
      ),
    });
  }, [step, navigation]);

  const handleGoBack = useCallback(() => {
    step === 1 ? navigation.goBack() : setStep(step - 1);
  }, [step, navigation]);

  const handleTakePhoto = async () => {
    const permission = await takePhotoPermission();

    if (permission) {
      navigation.navigate('TakePhotoModal', {
        ...PASSPORT_FLOW[step],
        callback: savePhoto,
      });
    }
  };

  const savePhoto = photo => {
    const isLast = step === 3;

    passportPhotos[step] = {
      ...photo,
      display_name: PASSPORT_PHOTO_NAMES[step],
    };

    dispatch(setPassportPhotos(passportPhotos));

    if (isLast) {
      navigation.goBack();
      return;
    }

    setStep(step + 1);
  };

  const pageData = useMemo(() => PASSPORT_FLOW[step], [step]);

  return (
    <View style={st.container}>
      <View style={st.imgContainer}>
        <Image source={pageData.image} style={st.img} />
      </View>
      <View style={st.whiteContainer}>
        <Text style={st.title}>{pageData.title}</Text>
        <Text style={st.text}>{pageData.text}</Text>
        <Button text="Сделать фото" onPress={handleTakePhoto} />
      </View>
    </View>
  );
};

export default VerifyPassport;