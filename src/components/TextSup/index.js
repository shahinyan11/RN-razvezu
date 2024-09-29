import {Text, View} from 'react-native';
import React from 'react';

import st from './styles';

const TextSup = ({containerStyle, textStyle, text, sup}) => {
  return (
    <View style={[st.container, containerStyle]}>
      <Text style={[st.text, textStyle]}>{text}</Text>
      <Text style={[st.sup, textStyle]}>{sup}</Text>
    </View>
  );
};
export default TextSup;
