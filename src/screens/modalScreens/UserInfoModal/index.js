import React, {useRef} from 'react';
import {Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';

import {IconPassport} from '@assets/svgs/other';
import useScreenContainer from '@hooks/useScreenContainer';
import {navigationRef} from '@navigation/RootNavigation';
import Button from '@components/buttons/Button';

import st from './styles';

const UserInfoModal = () => {
  const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();

  const onPress = () => {
    navigationRef.current.navigate('ChatStack');
    navigation.goBack();
  };

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        topInset={containerStyle.paddingTop}
        snapPoints={['50%', '100%']}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        enablePanDownToClose={true}>
        <BottomSheetScrollView contentContainerStyle={st.scrollContainer}>
          <View style={st.whiteContainer}>
            <View style={st.circle}>
              <IconPassport />
            </View>

            <Text style={[st.h2, {alignSelf: 'center'}]}>
              Введите сумму вывода
            </Text>
            <Text style={st.text}>Паспорт РФ</Text>

            <View style={st.greyContainer}>
              <Text style={st.label}>Серия и номер</Text>
              <Text style={[st.value, st.valueLast]}>96 89 09099</Text>
            </View>
            <Text style={st.h2}>Владелец</Text>
            <View style={st.greyContainer}>
              <Text style={st.label}>ФИО</Text>
              <Text style={st.value}>Иванов Иван Иванович</Text>
              <Text style={st.label}>Дата рождения</Text>
              <Text style={st.value}>08.09.1987</Text>
              <Text style={st.label}>Пол</Text>
              <Text style={[st.value, st.valueLast]}>Мужской</Text>
            </View>
            <Text style={st.h2}>Документ</Text>
            <View style={st.greyContainer}>
              <Text style={st.label}>Код подразделения</Text>
              <Text style={st.value}>189 -679</Text>
              <Text style={st.label}>Кем выдан</Text>
              <Text style={st.value}>МВД Московской Области</Text>
              <Text style={st.label}>Дата выдачи</Text>
              <Text style={[st.value, st.valueLast]}>08.09.1987</Text>
            </View>
            <Text style={st.h2}>Адрес регистрации</Text>
            <View style={st.greyContainer}>
              <Text style={st.label}>Адрес регистрации</Text>
              <Text style={st.value}>
                {
                  '167390, Россия, г. Москва, ул. Бориса\nБогаткова, д. 145, кв. 89'
                }
              </Text>
              <Text style={st.label}>Город</Text>
              <Text style={st.value}>Москва</Text>
              <Text style={st.label}>Дата регистрации</Text>
              <Text style={[st.value, st.valueLast]}>08.09.1987</Text>
            </View>
            <Button
              text={'Редактировать'}
              containerStyle={st.buttonContainer}
              onPress={onPress}
            />
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default UserInfoModal;
