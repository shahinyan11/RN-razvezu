import React from 'react';
import {Text, View} from 'react-native';

import {IconDepot} from '@assets/svgs/other';
import st from './styles';
import {SvgUri} from 'react-native-svg';

const MarkerExample = ({containerStyle, isActive, iconUrl}) => {
  return (
    <View>
      <View style={[st.container, isActive && st.active, containerStyle]}>
        {iconUrl && <SvgUri width={22} height={22} uri={iconUrl} />}

        {!iconUrl && (
          <>
            <IconDepot />
            <Text style={st.text}>12</Text>
          </>
        )}
      </View>
      <View style={[st.triangle, isActive && st.activeTriangle]} />
    </View>
  );
};

export default MarkerExample;
