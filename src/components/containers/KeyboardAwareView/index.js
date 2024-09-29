import React from 'react';
import {KeyboardAvoidingView, Platform} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import st from './styles';

const KeyboardAwareView = ({offset, children, containerStyle}) => {
  const insets = useSafeAreaInsets();

  return (
    <KeyboardAvoidingView
      style={[st.container, containerStyle]}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={
        offset !== undefined ? offset : insets.top + insets.bottom
      }>
      {children}
    </KeyboardAvoidingView>
  );
};

export default KeyboardAwareView;
