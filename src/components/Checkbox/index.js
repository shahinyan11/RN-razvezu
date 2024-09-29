import React from 'react';
import {View} from 'react-native';

import st from './styles';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {MAIN_COLORS} from '@constants/styles/colors';

const Checkbox = ({
  size = 16,
  containerStyle,
  innerIconStyle,
  checkedViewStyle,
  onPress,
  isChecked,
  text,
  textStyle,
}) => {
  const checkedView = () => <View style={[st.checkedView, checkedViewStyle]} />;

  return (
    <BouncyCheckbox
      size={size}
      text={text}
      style={containerStyle}
      textStyle={[st.text, textStyle]}
      isChecked={isChecked}
      onPress={onPress}
      unfillColor="transparent"
      disableBuiltInState={true}
      fillColor={MAIN_COLORS.BLACK_05}
      innerIconStyle={[st.innerIconStyle, innerIconStyle]}
      ImageComponent={checkedView}
    />
  );
};

export default Checkbox;
