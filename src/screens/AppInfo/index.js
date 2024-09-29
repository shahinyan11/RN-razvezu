import React from 'react';
import {Text, View, Dimensions, PixelRatio} from 'react-native';

import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import Header from '@components/screenHeaders/Header';
import st from './styles';

const FAQ = () => {
  const state = {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    window: Dimensions.get('window'),
    screen: Dimensions.get('screen'),
  };

  return (
    <ScreenScrollContainer
      whiteContainerStyle={st.whiteContainer}
      HeaderComponent={<Header title={'Состояние'} titleStyle={st.title} />}>
      <View>
        <Text style={st.text}>screen:{JSON.stringify(state.screen)}</Text>
        <Text style={st.text}>window:{JSON.stringify(state.window)}</Text>
        <Text style={st.text}>width:{JSON.stringify(state.width)}</Text>
        <Text style={st.text}>height:{JSON.stringify(state.height)}</Text>
        <Text style={st.text}>
          fontScale:{JSON.stringify(PixelRatio.getFontScale())}
        </Text>
      </View>
    </ScreenScrollContainer>
  );
};

export default FAQ;
