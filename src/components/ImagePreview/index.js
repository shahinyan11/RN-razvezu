import React from 'react';
import {Image, Text, View} from 'react-native';

import {IconRefresh} from '@assets/svgs/action';
import st from './styles';
import Loader from '@components/Loader';
import ButtonContainer from '@components/buttons/ButtonContainer';

export default function ImagePreview({
  containerStyle,
  data,
  onChange,
  isLoading,
}) {
  return (
    <View style={[st.container, containerStyle]}>
      <Image source={{uri: data.url || data.uri}} style={st.preview} />
      <View style={st.textBox}>
        <Text numberOfLines={1} style={st.name}>
          {data?.display_name || data?.name}
        </Text>
        <Text numberOfLines={1} style={st.resolution}>
          {data.resolution}, {data.size} kb
        </Text>
      </View>
      <ButtonContainer
        style={st.iconBox}
        onPress={onChange}
        disabled={isLoading}>
        {isLoading ? <Loader /> : <IconRefresh />}
      </ButtonContainer>
    </View>
  );
}
