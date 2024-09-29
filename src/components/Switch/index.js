import React, {memo, useState} from 'react';
import {Text, View} from 'react-native';

import st from './styles';
import ButtonContainer from '@components/buttons/ButtonContainer';

const Switch = ({label, onChange, defaultActive, ...props}) => {
  const [isActive, setIsActive] = useState(defaultActive);

  const handleSwitch = () => {
    setIsActive(!isActive);
    onChange(!isActive);
  };

  return (
    <ButtonContainer onPress={handleSwitch} style={st.container} {...props}>
      <View style={[st.button, isActive && st.activeButton]}>
        <View style={st.buttonInner} />
      </View>
      {label && <Text style={st.label}>{label}</Text>}
    </ButtonContainer>
  );
};

export default memo(Switch);
