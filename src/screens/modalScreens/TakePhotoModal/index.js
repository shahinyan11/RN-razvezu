import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {CameraRoll} from '@react-native-camera-roll/camera-roll';
import * as RNFS from 'react-native-fs';
import {isEmpty} from 'ramda';

import {goBack} from '@navigation/RootNavigation';
import {CAMERA_DETECTIONS} from '@constants/index';
import useScreenContainer from '@hooks/useScreenContainer';
import getFileNameFromPath from '@utils/getFileNameFromPath';
import getImageType from '@utils/getImageType';
import ButtonContainer from '@components/buttons/ButtonContainer';
import ScreenHeader from '@components/ScreenHeader';
import ObjectDetection from './ObjectDetection';
import FaceDetection from './FaceDetection';
import SimpleTake from './SimpleTake';
import st from './styles';

const TakePhotoModal = ({route}) => {
  const {callback, isFront, mask, validLabels, detectionType} = route.params;
  const {containerStyle} = useScreenContainer();
  const [photo, setPhoto] = useState({});

  const handleTakePhoto = async camera => {
    const _photo = await camera?.takePhoto({photoCodec: 'jpeg'});
    _photo.path = `file://${_photo?.path}`;

    setPhoto(_photo);
  };

  const handleSavePhoto = () => {
    const path = photo.path;

    CameraRoll.save(path, {type: 'photo'}).then(() => {
      RNFS.stat(path).then(fileStat => {
        callback({
          name: getFileNameFromPath(path),
          type: getImageType(path),
          uri: path,
          size: Math.round(fileStat.size / 1000),
          resolution: `${photo.width} x ${photo.height}`,
        });

        goBack();
      });
    });
  };

  const handleReshoot = () => setPhoto({});

  return (
    <View style={[st.container, containerStyle]}>
      {!isEmpty(photo) && (
        <View style={st.content}>
          <View style={st.photoView}>
            <Image source={{uri: photo.path}} style={st.image} />
          </View>
          <View style={st.row}>
            <ButtonContainer onPress={handleReshoot}>
              <Text style={st.text}>Переснять</Text>
            </ButtonContainer>
            <ButtonContainer onPress={handleSavePhoto}>
              <Text style={st.text}>Готово</Text>
            </ButtonContainer>
          </View>
        </View>
      )}

      {isEmpty(photo) && (
        <View style={st.content}>
          {!detectionType && (
            <SimpleTake isFront={isFront} onTakePhoto={handleTakePhoto} />
          )}

          {detectionType === CAMERA_DETECTIONS.FACE && (
            <FaceDetection
              mask={mask}
              isFront={isFront}
              onTakePhoto={handleTakePhoto}
            />
          )}

          {detectionType === CAMERA_DETECTIONS.OBJECT && (
            <ObjectDetection
              mask={mask}
              isFront={isFront}
              onTakePhoto={handleTakePhoto}
              validLabels={validLabels}
            />
          )}

          <ScreenHeader />
        </View>
      )}
    </View>
  );
};

export default TakePhotoModal;
