import {useRef} from 'react';
import {Animated} from 'react-native';

const useScrollAnim = () => {
  const startY = useRef(0);
  const animHeight = new Animated.Value(60);

  const onTouchStart = ({nativeEvent}) => {
    const {pageY} = nativeEvent;
    startY.current = pageY;
  };

  const onTouchEnd = ({nativeEvent}) => {
    const {pageY} = nativeEvent;
    Animated.timing(animHeight, {
      toValue: pageY < startY.current ? 0 : 60,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const animatedStyle = {
    height: animHeight,
  };

  return {
    onTouchStart,
    onTouchEnd,
    animatedStyle,
  };
};

export default useScrollAnim;
