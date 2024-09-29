import React from 'react';
import {useField} from 'formik';

import {TEXT_COLORS} from '@constants/styles/colors';
import TextInput from '@components/inputs/TextInput';
import st from './styles';

const TextField = ({
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
  InputComponent,
  ...props
}) => {
  const [field, meta, helper] = useField(name);
  const {value} = meta;

  const handleFocus = e => {
    onFocus?.(e.target);
    helper.setTouched(false);
  };

  const handleBlur = () => {
    helper.setTouched(true);
    field.onBlur(name);
  };

  return (
    <TextInput
      value={value}
      label={label}
      labelStyle={labelStyle}
      onChangeText={helper.setValue}
      onFocus={handleFocus}
      onBlur={handleBlur}
      style={[st.input, inputStyle]}
      containerStyle={containerStyle}
      inputContainerStyle={inputContainerStyle}
      placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
      error={meta.touched && meta.error}
      InputComponent={InputComponent}
      {...props}
    />
  );
};

export default TextField;
