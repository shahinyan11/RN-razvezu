import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import {TEXT_COLORS} from '@constants/styles/colors';
import {IconSearch} from '@assets/svgs/other';
import {IconDelete} from '@assets/svgs/action';
import st from './styles';
import {ACTIVE_OPACITY} from '@constants/index';

const SearchInput = ({
  value,
  name,
  blurMode,
  addAfter,
  addBefore,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  labelStyle,
  placeholderColor,
  onChangeText,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const onPressDelete = () => {
    onChangeText('');
  };

  return (
    <View
      style={[st.container, containerStyle, !isFocused && st.containerBlur]}>
      <IconSearch />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={[st.input, inputStyle]}
        placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {isFocused && value && (
        <TouchableOpacity
          onPress={onPressDelete}
          activeOpacity={ACTIVE_OPACITY}>
          <IconDelete />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchInput;
