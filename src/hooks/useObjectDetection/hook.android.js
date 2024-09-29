import {useFrameProcessor} from 'react-native-vision-camera';
import {useEffect, useRef, useState} from 'react';
import {detectObjects} from 'vision-camera-realtime-object-detection';
import {runOnJS} from 'react-native-reanimated';
import checkPositionAccuracy from '@utils/checkPositionAccuracy';
import {useWindowDimensions} from 'react-native';
import {pick} from 'ramda';

const frameProcessorConfig = {
  modelFile: 'model.tflite',
  scoreThreshold: 0.4,
  maxResults: 1,
  numThreads: 4,
};

const useObjectDetection = ({callback, validLabels = []}) => {
  const windowDimensions = useWindowDimensions();
  const maskRef = useRef();
  const maskBounds = useRef();
  const detected = useRef(false);
  const [objects, setObjects] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      maskRef?.current?.measure((px, py, width, height, x, y) => {
        maskBounds.current = {width, height, left: x, top: y};
      });
    }, 500);
  }, []);

  const onDetect = data => {
    data?.forEach(obj => {
      obj.top = obj.top * windowDimensions.height;
      obj.left = obj.left * windowDimensions.width;
      obj.width = obj.width * windowDimensions.width;
      obj.height = obj.height * windowDimensions.height;

      const validationResults = validLabels.map(({label, confidence}) => {
        const found = obj?.labels?.find(
          objLabel =>
            objLabel.label === label && objLabel.confidence > confidence,
        );

        return Boolean(found);
      });

      if (!validationResults.includes(false)) {
        const objectBounds = pick(['top', 'left', 'width', 'height'], obj);

        const isFit = checkPositionAccuracy({
          maskBounds: maskBounds.current,
          objectBounds,
        });

        if (isFit) {
          if (!detected.current) {
            callback?.();
          }

          detected.current = true;
        }
      }
    });

    setObjects(data);
  };

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';
    const detectedObjects = detectObjects(frame, frameProcessorConfig);

    runOnJS(onDetect)(detectedObjects);
  }, []);

  return {
    maskRef,
    frameProcessor,
    objects,
  };
};

export default useObjectDetection;
