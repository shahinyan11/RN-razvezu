import React from 'react';
import {Text} from 'react-native';

import st from './styles';
import {IconPlus} from '@assets/svgs/vectors';
import ButtonContainer from '@components/buttons/ButtonContainer';
import Loader from '@components/Loader';

const TakePhotoButton = ({
  text,
  addAfter,
  addBefore,
  containerStyle,
  onPress,
  error,
  isLoading,
  ...prop
}) => {
  return (
    <ButtonContainer
      onPress={onPress}
      style={[st.container, containerStyle, error && st.errorContainer]}
      disabled={isLoading}
      {...prop}>
      {isLoading && <Loader />}

      {!isLoading && (
        <>
          <IconPlus size={14} />
          <Text style={st.text}>{text || 'Сделать фото'}</Text>
        </>
      )}
    </ButtonContainer>
  );
};

export default TakePhotoButton;
