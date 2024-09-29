import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {useField} from 'formik';

import {TEXT_COLORS} from '@constants/styles/colors';
import st from './styles';
import textToNumber from '@utils/textToNumber';

const NumberField = ({
  label,
  name,
  blurMode,
  addAfter,
  addBefore,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  labelStyle,
  placeholderColor,
  onFocus,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [field, meta, helper] = useField(name);
  const {value} = meta;

  const handleFocus = e => {
    onFocus?.(e.target);
    setIsFocused(true);
    helper.setTouched(false);
  };

  const handleBlur = () => {
    setIsFocused(false);
    helper.setTouched(true);
    field.onBlur(name);
  };

  const handleChange = value => {
    const numericValue = textToNumber(value);

    helper.setValue(numericValue);
  };

  const hasError = meta.touched && meta.error;

  return (
    <View style={containerStyle}>
      {label && <Text style={labelStyle}>{label}</Text>}

      <View
        style={[
          st.inputContainer,
          inputContainerStyle,
          hasError && st.errorContainer,
          !isFocused && !hasError && st.containerBlur,
        ]}>
        {addBefore}
        <TextInput
          value={value}
          keyboardType={'numeric'}
          onChangeText={handleChange}
          style={[st.input, inputStyle]}
          placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
        />
        {addAfter}
      </View>
      {hasError && <Text style={st.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default NumberField;
