import React, {useState} from 'react';
import {Text, View} from 'react-native';
import MaskInput from 'react-native-mask-input';
import {useField} from 'formik';

import {TEXT_COLORS} from '@constants/styles/colors';
import {PHONE_MASK} from '@constants/masks';
import st from './styles';

const PhoneField = ({
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
  const [_, meta, helper] = useField(name);
  const {value} = meta;

  const handleFocus = e => {
    onFocus?.(e.target);
    setIsFocused(true);
  };

  const handleBlur = () => {
    helper.setTouched(true);
    setIsFocused(false);
  };

  const normalizePhoneNumber = dirtyPhone => {
    if (dirtyPhone[0] === '8') {
      dirtyPhone[0] = '7';
    }

    if (dirtyPhone[1] === '8') {
      dirtyPhone = dirtyPhone.replace('8', '');
    }

    if (dirtyPhone[0] === '7' && dirtyPhone[1] === '7') {
      dirtyPhone = dirtyPhone.replace('77', '7');
    }

    if (dirtyPhone[0] !== '7' && dirtyPhone[0] !== '8') {
      dirtyPhone = '7' + dirtyPhone;
    }
    dirtyPhone = dirtyPhone.substr(0, 11);

    return dirtyPhone;
  };

  const handleChange = (masked, unMasked) => {
    unMasked = normalizePhoneNumber(unMasked);

    helper.setValue({
      unMasked,
      masked,
    });
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
          {...props}
          value={value.unMasked}
          onChangeText={handleChange}
          style={[st.input, inputStyle]}
          placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
          onFocus={handleFocus}
          onBlur={handleBlur}
          mask={PHONE_MASK}
          keyboardType={'numeric'}
        />
        {addAfter}
      </View>
      {hasError && <Text style={st.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default PhoneField;
