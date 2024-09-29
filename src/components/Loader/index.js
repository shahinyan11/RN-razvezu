import React, {useEffect} from 'react';
import {Animated, Easing, View} from 'react-native';
import {IconLoader} from '@assets/svgs/other';
import st from './styles';

const Loader = ({containerStyle, size}) => {
  const spinValue = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    ).start();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={[st.container, containerStyle]}>
      <Animated.View style={{transform: [{rotate: spin}]}}>
        <IconLoader size={size} />
      </Animated.View>
    </View>
  );
};

export default Loader;
