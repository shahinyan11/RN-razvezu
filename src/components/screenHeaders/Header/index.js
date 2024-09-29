import React from 'react';
import {Pressable, Text, View} from 'react-native';

import {IconBack} from '@assets/svgs/action';
import {goBack} from '@navigation/RootNavigation';
import st from './styles';

const Header = ({
  containerStyle,
  titleStyle,
  addLeft,
  addRight,
  title = '',
  showBackIcon = true,
  onPressBack,
}) => {
  return (
    <View style={[st.container, containerStyle]}>
      <View style={st.leftView}>
        {showBackIcon && (
          <Pressable onPress={onPressBack || goBack}>
            <IconBack />
          </Pressable>
        )}
        {addLeft}
      </View>
      <Text style={[st.title, titleStyle]}>{title}</Text>
      <View>{addRight}</View>
    </View>
  );
};

export default Header;
