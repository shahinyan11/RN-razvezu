import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';

import st from './styles';
import {IconFileMessage} from '@assets/svgs/other';
import {MAIN_COLORS} from '@constants/styles/colors';
import {ACTIVE_OPACITY} from '@constants/index';
import {useNavigation} from '@react-navigation/native';

const DocumentCard = ({containerStyle}) => {
  const navigation = useNavigation();

  const onPassportPress = () => {
    navigation.navigate('UserInfoModal');
  };

  return (
    <View style={[st.container, containerStyle]}>
      <Text style={st.text}>Документы</Text>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 20}}>
        <TouchableOpacity
          style={st.blackBox}
          onPress={onPassportPress}
          activeOpacity={ACTIVE_OPACITY}>
          <IconFileMessage
            size={25}
            backgroundColor={MAIN_COLORS.GREY_40}
            color={MAIN_COLORS.WHITE}
          />
          <Text style={st.boxText}>Паспорт РФ</Text>
        </TouchableOpacity>
        <View style={st.divider} />
        <View style={st.blackBox}>
          <IconFileMessage
            size={25}
            backgroundColor={MAIN_COLORS.GREY_40}
            color={MAIN_COLORS.WHITE}
          />
          <Text style={st.boxText}>В.У.</Text>
        </View>
        <View style={st.divider} />
        <View style={st.blackBox}>
          <IconFileMessage
            size={25}
            backgroundColor={MAIN_COLORS.GREY_40}
            color={MAIN_COLORS.WHITE}
          />
          <Text style={st.boxText}>Св-во ТС</Text>
        </View>
      </ScrollView>
    </View>
  );
};
export default DocumentCard;
