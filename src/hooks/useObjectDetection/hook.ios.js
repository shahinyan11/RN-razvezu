import {useRef} from 'react';

const useObjectDetection = () => {
  const maskRef = useRef();

  return {
    maskRef,
    objects: [],
    frameProcessor: null,
  };
};

export default useObjectDetection;
