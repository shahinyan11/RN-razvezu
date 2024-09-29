import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {useField} from 'formik';
import MaskInput from 'react-native-mask-input';

import {TEXT_COLORS} from '@constants/styles/colors';
import {DATE_MASK} from '@constants/masks';
import st from './styles';

const DateField = ({
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

  const handleChange = masked => {
    helper.setValue(masked);
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
        <MaskInput
          value={value}
          onChangeText={handleChange}
          style={[st.input, inputStyle]}
          placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
          mask={DATE_MASK}
          onFocus={handleFocus}
          onBlur={handleBlur}
          keyboardType="numeric"
          {...props}
        />
        {addAfter}
      </View>
      {hasError && <Text style={st.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default DateField;
