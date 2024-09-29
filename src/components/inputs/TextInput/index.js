import React, {useMemo, useState} from 'react';
import {Text, TextInput as RNTextInput, View} from 'react-native';

import {TEXT_COLORS} from '@constants/styles/colors';
import st from './styles';

const TextInput = ({
  label,
  addAfter,
  addBefore,
  containerStyle,
  inputContainerStyle,
  labelStyle,
  placeholderColor,
  onFocus,
  onBlur,
  error,
  InputComponent = RNTextInput,
  style,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = e => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = () => {
    setIsFocused(false);
    onBlur?.();
  };

  const isBlur = useMemo(() => !isFocused && !error, [isFocused, error]);

  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}

      <View
        style={[
          st.inputContainer,
          inputContainerStyle,
          error && st.errorContainer,
          isBlur && st.containerBlur,
        ]}>
        {addBefore}
        <InputComponent
          {...props}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
          style={[style, isBlur && st.inputBlur]}
        />
        {addAfter}
      </View>
      {error && <Text style={st.errorText}>{error}</Text>}
    </View>
  );
};

export default TextInput;
