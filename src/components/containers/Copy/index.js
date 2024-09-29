import React from 'react';
import {TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

import {ACTIVE_OPACITY} from '@constants/index';

const Copy = ({children, value, ...props}) => {
  const onPres = () => {
    console.log(value, 'fhghgf');
    Clipboard.setString(value.toString());
    Toast.show({
      type: 'info',
      text1: 'Скопировано в буфер обмена',
    });
  };

  return (
    <TouchableOpacity
      {...props}
      activeOpacity={ACTIVE_OPACITY}
      onPress={onPres}
      disabled={!value}>
      {children}
    </TouchableOpacity>
  );
};
export default Copy;
