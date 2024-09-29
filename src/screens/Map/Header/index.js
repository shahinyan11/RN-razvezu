import React from 'react';
import {View} from 'react-native';
import {deg} from 'react-native-linear-gradient-degree';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import {MAIN_COLORS} from '@constants/styles/colors';
import BackButton from '@components/buttons/BackButton';
import st from './styles';

const Header = () => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      style={{paddingTop: insets.top}}
      // colors={[MAIN_COLORS.WHITE_085, MAIN_COLORS.WHITE_0]}
      colors={[MAIN_COLORS.WHITE_0, MAIN_COLORS.WHITE_0]}
      locations={[0.49, 1.8]}
      {...deg(180)}>
      <View style={st.header}>
        <BackButton color={MAIN_COLORS.BLACK} />
        {/*<View style={st.center}>*/}
        {/*  <View style={{justifyContent: 'center'}}>*/}
        {/*    <Text style={st.text}>Ваше местоположение </Text>*/}
        {/*    <IconArrowRight size={17} style={st.icon} />*/}
        {/*  </View>*/}
        {/*  <Text style={st.textBold}> Б. Богаткова, 192</Text>*/}
        {/*</View>*/}
        <View />
      </View>
    </LinearGradient>
  );
};

export default Header;
