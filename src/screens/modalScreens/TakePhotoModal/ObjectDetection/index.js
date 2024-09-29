import React, {useEffect, useRef, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

import {
  Camera,
  useCameraDevices,
  useCameraFormat,
} from 'react-native-vision-camera';

import useObjectDetection from '@hooks/useObjectDetection';
import {ACTIVE_OPACITY} from '@constants/index';
import TestObjBounds from './TestObjBounds';
import st from './styles';

const ObjectDetection = ({mask, onTakePhoto, validLabels, isFront = false}) => {
  const camera = useRef();
  const [isActive, setIsActive] = useState(true);
  const devices = useCameraDevices();
  const device = isFront ? devices.front : devices.back;
  const format = useCameraFormat(device);

  useEffect(() => () => setIsActive(false), []);

  const handleCapture = () => {
    onTakePhoto(camera.current);
  };

  const {frameProcessor, objects, maskRef} = useObjectDetection({
    isFront,
    callback: handleCapture,
    validLabels,
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

      <TestObjBounds data={objects} />

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

export default ObjectDetection;
