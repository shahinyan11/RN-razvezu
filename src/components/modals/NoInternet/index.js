import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import RNModal from 'react-native-modal';
import NetInfo from '@react-native-community/netinfo';

import {IconWiFi} from '@assets/svgs/other';
import st from './styles';

const NoInternet = () => {
  const [isNetEnabled, setNetEnabled] = useState(true);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setNetEnabled(offline);

      setVisible(!state.isConnected);
    });

    return () => removeNetInfoSubscription();
  }, [isNetEnabled]);

  return (
    <RNModal style={{margin: 0}} isVisible={visible} useNativeDriver={true}>
      <View style={st.container}>
        <View style={st.imgContainer}>
          <IconWiFi />
        </View>
        <View style={st.whiteContainer}>
          <Text style={st.title}>Ой-ой-ой</Text>
          <Text style={st.text}>Мы остались без интернета</Text>
        </View>
      </View>
    </RNModal>
  );
};

export default NoInternet;
