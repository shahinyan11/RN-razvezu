import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import st from './styles';
import {useField} from 'formik';
import {IconArrowRight} from '@assets/svgs/other';
import {ACTIVE_OPACITY} from '@constants/index';

const SelectField = ({
  label,
  name,
  displayValue,
  addAfter,
  addBefore,
  containerStyle,
  inputContainerStyle,
  textStyle,
  labelStyle,
  placeholder,
  onPress,
}) => {
  const [_, meta] = useField(name);
  const {value} = meta;

  const hasError = meta.touched && meta.error;

  return (
    <View style={[st.container, containerStyle]}>
      {label && <Text style={labelStyle}>{label}</Text>}

      <TouchableOpacity
        onPress={onPress}
        style={[
          st.inputContainer,
          hasError ? st.errorContainer : {},
          inputContainerStyle,
        ]}
        activeOpacity={ACTIVE_OPACITY}>
        {addBefore}
        <Text style={[st.text, textStyle]}>
          {displayValue || value || placeholder}
        </Text>
        {addAfter}
        <IconArrowRight />
      </TouchableOpacity>
      {hasError && <Text style={st.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default SelectField;
