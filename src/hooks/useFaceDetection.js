import {useFrameProcessor} from 'react-native-vision-camera';
import {useCallback, useEffect, useRef, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {scanFaces} from 'vision-camera-face-detector';
import {runOnJS} from 'react-native-reanimated';
import adjustToView from '@helpers/adjustToView';
import {isAndroid} from '@constants/device';
import checkPositionAccuracy from '@utils/checkPositionAccuracy';

const useFaceDetection = ({isFront = true, callback}) => {
  const detected = useRef();
  const maskRef = useRef();
  const maskBounds = useRef();
  const {width, height} = useWindowDimensions();
  const [faces, setFaces] = useState([]);
  const [frameDimensions, setFrameDimensions] = useState();
  const landscapeMode = width > height;
  const mirrored = isAndroid && isFront;

  useEffect(() => {
    if (checkAccuracy()) {
      callback();
    }
  }, [faces, maskBounds.current]);

  useEffect(() => {
    setTimeout(() => {
      maskRef?.current?.measure((px, py, width, height, x, y) => {
        maskBounds.current = {width, height, left: x, top: y};
      });
    }, 500);
  }, []);

  const handleScan = useCallback(
    (frame, newFaces) => {
      const isRotated = !landscapeMode;
      setFrameDimensions(
        isRotated
          ? {
              width: frame.height,
              height: frame.width,
            }
          : {
              width: frame.width,
              height: frame.height,
            },
      );
      setFaces(newFaces);
    },
    [landscapeMode],
  );

  const frameProcessor = useFrameProcessor(
    frame => {
      'worklet';

      runOnJS(handleScan)(frame, scanFaces(frame));
    },
    [handleScan],
  );

  const {adjustRect} = adjustToView(
    frameDimensions,
    {
      width: width,
      height: height,
    },
    landscapeMode,
  );

  const checkAccuracy = () => {
    let isFit = false;

    if (detected.current) {
      return;
    }

    faces?.map(({bounds}) => {
      const adjustData = adjustRect(bounds);

      isFit = checkPositionAccuracy({
        maskBounds: maskBounds.current,
        objectBounds: adjustData,
        mirrored,
      });

      detected.current = isFit;
    });

    return isFit;
  };

  return {
    maskRef,
    frameProcessor: frameProcessor,
    faces: frameDimensions ? faces : [],
    adjustRect,
  };
};

export default useFaceDetection;
