import React, {useEffect, useRef, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import {
  Camera,
  useCameraDevices,
  useCameraFormat,
} from 'react-native-vision-camera';
import {ACTIVE_OPACITY} from '@constants/index';
import st from './styles';

const SimpleTake = ({onTakePhoto, isFront = false}) => {
  const devices = useCameraDevices();
  const device = isFront ? devices.front : devices.back;
  const camera = useRef(null);
  const [isActive, setIsActive] = useState(true);
  const format = useCameraFormat(device);

  useEffect(() => {
    return () => setIsActive(false);
  }, []);

  const handlePress = () => {
    onTakePhoto(camera.current);
  };

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
        style={StyleSheet.absoluteFill}
      />

      <View style={st.overlay}>
        <TouchableOpacity
          style={st.captureButton}
          onPress={handlePress}
          activeOpacity={ACTIVE_OPACITY}
        />
      </View>
    </>
  );
};

export default SimpleTake;
