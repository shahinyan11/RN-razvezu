import React, {useCallback, useLayoutEffect, useMemo, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import st from './styles';
import Button from '@components/buttons/Button';
import {useNavigation} from '@react-navigation/native';
import {CAR_DOC_FLOW, CAR_DOC_NAMES} from '@constants/verification';
import {IconBack} from '@assets/svgs/action';
import {useDispatch, useSelector} from 'react-redux';
import {setCarDocPhotos} from '@store/verification';
import {selectCarDocPhotos} from '@store/verification/selectors';
import {ACTIVE_OPACITY} from '@constants/index';
import {keys, last} from 'ramda';
import takePhotoPermission from '@utils/takePhotoPermission';

const VerifyCarDoc = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const carDocPhotos = useSelector(selectCarDocPhotos);
  const [step, setStep] = useState(+last(keys(carDocPhotos)) + 1 || 1);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: `${step} из 2`,
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
        ...CAR_DOC_FLOW[step],
        callback: savePhoto,
      });
    }
  };

  const savePhoto = photo => {
    const isLast = step === 2;

    carDocPhotos[step] = {
      ...photo,
      display_name: CAR_DOC_NAMES[step],
    };

    dispatch(setCarDocPhotos(carDocPhotos));

    if (isLast) {
      navigation.goBack();
      return;
    }

    setStep(step + 1);
  };

  const pageData = useMemo(() => CAR_DOC_FLOW[step], [step]);

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

export default VerifyCarDoc;
