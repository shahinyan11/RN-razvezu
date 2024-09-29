import {imgEmptyData} from '@assets/images';
import {Image, Text, View} from 'react-native';

import st from './styles';
import React from 'react';

const Empty = () => {
  return (
    <View style={st.container}>
      <Image source={imgEmptyData} />
      <Text style={st.emptyText}>
        Ничего не нашлось по вашему запросу, попробуйте снова
      </Text>
    </View>
  );
};

export default Empty;
