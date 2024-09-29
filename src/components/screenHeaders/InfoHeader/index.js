import React from 'react';
import {Image, Text, View} from 'react-native';

import BackButton from '@components/buttons/BackButton';
import st from './styles';

const InfoHeader = ({icon, title, text}) => {
  return (
    <View style={st.container}>
      {icon && <Image source={{uri: icon}} style={st.logo} />}
      {!icon && <BackButton style={st.back} />}
      <View>
        <Text style={st.title}>{title}</Text>
        <Text style={st.text}>{text}</Text>
      </View>
    </View>
  );
};

export default InfoHeader;
