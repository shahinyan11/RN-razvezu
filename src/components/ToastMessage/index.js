import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Toast from 'react-native-toast-message';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {IconCheck} from '@assets/svgs/vectors';
import {IconError} from '@assets/svgs/other';
import TEXTS from '@constants/texts';
import st from './styles';

const ToastMessage = ({topOffset}) => {
  const insets = useSafeAreaInsets();

  const toastConfig = {
    success: ({text1, props}) => (
      <View style={st.container}>
        <View style={st.content}>
          <View style={st.iconBox}>
            <IconCheck />
          </View>
          <Text style={st.text}>{text1 || TEXTS.SUCCESS_MESSAGE}</Text>
        </View>
      </View>
    ),

    error: ({text1, props}) => (
      <View style={st.container}>
        <View style={st.content}>
          <View style={st.iconBox}>
            <IconError />
          </View>
          <Text style={st.text}>{text1 || TEXTS.ERROR_MESSAGE}</Text>
        </View>
      </View>
    ),
    info: ({text1, onPress}) => (
      <View style={st.container}>
        <TouchableOpacity style={st.content} onPress={onPress}>
          <Text style={st.text}>{text1}</Text>
        </TouchableOpacity>
      </View>
    ),
  };

  return <Toast config={toastConfig} topOffset={topOffset || insets.top + 8} />;
};

export default ToastMessage;
