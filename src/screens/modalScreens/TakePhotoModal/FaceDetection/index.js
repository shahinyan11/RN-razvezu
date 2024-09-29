import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {
  Camera,
  useCameraDevices,
  useCameraFormat,
} from 'react-native-vision-camera';
import {ACTIVE_OPACITY} from '@constants/index';
import TestFaceBounds from './TestFaceBounds';
import st from './styles';
import useFaceDetection from '@hooks/useFaceDetection';

const FaceDetection = ({mask, onTakePhoto, isFront = true}) => {
  const camera = useRef();
  const [isActive, setIsActive] = useState(true);
  const devices = useCameraDevices();
  const device = isFront ? devices.front : devices.back;
  const format = useCameraFormat(device);

  useEffect(() => () => setIsActive(false), []);

  const handleCapture = () => {
    onTakePhoto(camera.current);
  };

  const {frameProcessor, faces, adjustRect, maskRef} = useFaceDetection({
    callback: handleCapture,
  });

  if (device == null) {
    return undefined;
  }

  return (
    <>
      <Camera
        ref={camera}
        device={device}
        format={format}
        photo={true}
        audio={false}
        isActive={isActive}
        frameProcessorFps={10}
        frameProcessor={frameProcessor}
        style={StyleSheet.absoluteFill}
      />

      <TestFaceBounds data={faces} adjustRect={adjustRect} isFront={isFront} />

      <View style={st.overlay}>
        <View style={st.maskCont}>
          <Image style={st.image} source={mask} ref={maskRef} />
        </View>

        {!isFront && (
          <TouchableOpacity
            style={st.captureButton}
            onPress={handleCapture}
            activeOpacity={ACTIVE_OPACITY}
          />
        )}
      </View>
    </>
  );
};

export default FaceDetection;
