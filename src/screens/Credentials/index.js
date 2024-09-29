import React from 'react';
import {Alert, Linking, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import st from './styles';
import Button from '@components/buttons/Button';
import ButtonContainer from '@components/buttons/ButtonContainer';
import {selectLoaders} from '@store/loader/selectors';
import {profileRemoveEndpoint} from '@store/user/endpoints';
import {profileRemoveRequest, userInfoRequest} from '@store/user/operations';
import Header from '@components/screenHeaders/Header';
import {userSelector} from '@store/user/selectors';
import {useNavigation} from '@react-navigation/native';
import {MaskedText} from 'react-native-mask-text';

const Credentials = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const loaders = useSelector(selectLoaders);
  const {endpoint} = profileRemoveEndpoint;
  const {email, phone} = useSelector(userSelector);

  const onRefresh = () => {
    dispatch(userInfoRequest());
  };

  const onPressEdit = () => {
    navigation.navigate('ChatStack');
  };

  const onRemoveAccount = () => {
    Alert.alert('Вы действительно хотите удалить свой аккаунт?', '', [
      {
        text: 'Подтвердить',
        onPress: () => dispatch(profileRemoveRequest()),
      },
      {
        text: 'Отменить',
        style: 'cancel',
      },
    ]);
  };

  return (
    <ScreenScrollContainer
      onRefresh={onRefresh}
      whiteContainerStyle={st.whiteContainer}
      HeaderComponent={
        <Header title={'Учетные данные'} titleStyle={st.title} />
      }>
      <View style={st.inputContainer}>
        <Text style={st.text}>{email}</Text>
      </View>
      <View style={st.inputContainer}>
        <MaskedText mask={'+9 (999) 999 99 99'} style={st.text}>
          {phone}
        </MaskedText>
      </View>

      <ButtonContainer
        style={st.logOut}
        isLoading={loaders[endpoint]}
        onPress={onRemoveAccount}>
        <Text style={st.logOutText}>Удалить аккаунт</Text>
      </ButtonContainer>
      <Text style={st.bottomText}>
        Прочите информацию об{' '}
        <Text
          style={st.underline}
          onPress={() =>
            Linking.openURL('https://razvezu.pro/public/deleting')
          }>
          Удалении аккаунта
        </Text>
      </Text>
      <Button text="Редактировать" onPress={onPressEdit} />
    </ScreenScrollContainer>
  );
};

export default Credentials;
