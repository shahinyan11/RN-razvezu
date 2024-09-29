import React from 'react';
import {View} from 'react-native';

import useScreenContainer from '@hooks/useScreenContainer';
import st from './styles';

const ScreenContainer = ({whiteContainerStyle, children, HeaderComponent}) => {
  const {containerStyle} = useScreenContainer();

  return (
    <View style={containerStyle}>
      <View style={st.container}>
        <View style={st.header}>{HeaderComponent}</View>
        <View style={[st.whiteContainer, whiteContainerStyle]}>{children}</View>
      </View>
    </View>
  );
};

export default ScreenContainer;
