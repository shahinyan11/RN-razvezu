import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

import {TEXT_COLORS} from '@constants/styles/colors';
import st from './styles';
import {IconLink} from '@assets/svgs/other';
import {IconSend} from '@assets/svgs/action';

const MessageInput = ({
  value,
  blurMode,
  addAfter,
  addBefore,
  containerStyle,
  inputStyle,
  labelStyle,
  placeholderColor,
  onFocus,
  onUploadFile,
  onSend,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = e => {
    onFocus?.(e.target);
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[st.container, containerStyle, !isFocused && st.containerBlur]}>
      {addBefore}
      <TextInput
        value={value}
        style={[st.input, inputStyle]}
        placeholderTextColor={placeholderColor || TEXT_COLORS.BLACK_05}
        onFocus={handleFocus}
        onBlur={handleBlur}
        multiline={true}
        {...props}
      />
      <View style={st.rightBox}>
        {addAfter}
        <IconLink style={st.icon} onPress={onUploadFile} />
        <IconSend onPress={onSend} />
      </View>
    </View>
  );
};

export default MessageInput;
