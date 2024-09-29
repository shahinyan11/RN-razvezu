import React from 'react';
import {Text} from 'react-native';

import * as styles from './styles';
import Loader from '@components/Loader';
import ButtonContainer from '@components/buttons/ButtonContainer';

const Button = ({
  text,
  addAfter,
  addBefore,
  containerStyle,
  textStyle,
  onPress,
  disabled,
  theme = 'black',
  isLoading = false,
  ...prop
}) => {
  const st = styles[theme];

  const _disabled = isLoading || disabled;

  return (
    <ButtonContainer
      disabled={disabled}
      onPress={onPress}
      style={[st.container, _disabled && st.containerDisable, containerStyle]}
      {...prop}>
      {addBefore}
      <Text style={[st.text, disabled && st.textDisabled, textStyle]}>
        {isLoading ? <Loader /> : text}
      </Text>
      {addAfter}
    </ButtonContainer>
  );
};

export default Button;
