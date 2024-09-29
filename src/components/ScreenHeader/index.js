import React from 'react';
import {Animated, Pressable, Text, View} from 'react-native';

import {IconBack} from '@assets/svgs/action';
import st from './styles';
import {goBack} from '@navigation/RootNavigation';

const ScreenHeader = ({
  containerStyle,
  textStyle,
  addLeft,
  addRight,
  text = '',
  showBackIcon = true,
  animatedStyle,
  onPressBack,
}) => {
  return (
    <Animated.View style={[st.stepView, containerStyle, animatedStyle]}>
      <View style={st.leftView}>
        {showBackIcon && (
          <Pressable onPress={onPressBack || goBack}>
            <IconBack />
          </Pressable>
        )}
        {addLeft}
      </View>
      <View style={st.centerView}>
        <Text style={[st.stepText, textStyle]}>{text}</Text>
      </View>
      <View>{addRight}</View>
    </Animated.View>
  );
};

export default ScreenHeader;
