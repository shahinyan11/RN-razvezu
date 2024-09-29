import React from 'react';
import {Text, View} from 'react-native';

import st from './styles';
import {IconArrowRight, IconCalendar} from '@assets/svgs/other';
import {MAIN_COLORS} from '@constants/styles/colors';
import ButtonContainer from '@components/buttons/ButtonContainer';

const SlotCard = ({
  containerStyle,
  boldTextStyle,
  textStyle,
  boldText,
  text,
  leftIconBgColor = MAIN_COLORS.BLACK,
  leftIcon = <IconCalendar />,
  rightIcon = <IconArrowRight />,
  onPress,
}) => {
  return (
    <ButtonContainer style={[st.container, containerStyle]} onPress={onPress}>
      <View style={[st.circle, {backgroundColor: leftIconBgColor}]}>
        {leftIcon}
      </View>
      <View style={st.centerBox}>
        <Text style={[st.boldText, boldTextStyle]}>{boldText}</Text>
        {/*<Text style={(st.text, textStyle)}>{text || '10 мест'}</Text>*/}
      </View>
      {rightIcon}
    </ButtonContainer>
  );
};
export default SlotCard;
