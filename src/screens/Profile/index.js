import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import st from './styles';
import {IconArrowRight} from '@assets/svgs/other';
import Switch from '@components/Switch';
import {useNavigation} from '@react-navigation/native';
import {ACTIVE_OPACITY} from '@constants/index';
import ButtonContainer from '@components/buttons/ButtonContainer';
import {useDispatch, useSelector} from 'react-redux';
import {logoutAction} from '@store/auth/operations';
import {userInfoRequest} from '@store/user/operations';
import InfoHeader from '@components/screenHeaders/InfoHeader';
import {userSelector} from '@store/user/selectors';
import TextInput from '@components/inputs/TextInput';
import {baseUrlSelector} from '@store/configs/selectors';
import {checkUrlRequest} from '@store/configs/operations';
import Button from '@components/buttons/Button';
import {imgReferral} from '@assets/images';

const Profile = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const baseUrl = useSelector(baseUrlSelector);
  const {name, age, city, avatar, is_admin} = useSelector(userSelector);
  const [proxy, setProxy] = useState('');

  useEffect(() => {
    setProxy(baseUrl);
  }, [baseUrl]);

  const navigateToScreen = screen => () => {
    navigation.navigate(screen);
  };

  const onLogoutPress = () => dispatch(logoutAction());

  const onRefresh = () => {
    dispatch(userInfoRequest());
  };

  const onSaveProxy = () => dispatch(checkUrlRequest(proxy));

  return (
    <ScreenScrollContainer
      HeaderComponent={
        <InfoHeader
          icon={avatar?.url}
          title={name}
          text={`${age} года, г. ${city?.name}`}
        />
      }
      whiteContainerStyle={st.whiteContainer}
      onRefresh={onRefresh}>
      {/*   <DocumentCard /> // TODO Дождаться бекенда и динамически рендерить карточки */}
      <Text style={st.h2}>Общие настройки</Text>

      <TouchableOpacity
        style={st.menuItem}
        onPress={navigateToScreen('Credentials')}
        activeOpacity={ACTIVE_OPACITY}>
        <Text>Учетные данные</Text>
        <IconArrowRight />
      </TouchableOpacity>

      {/*
      <View style={st.menuItem}>
        <Text>Уведомления</Text>
        <Switch active={true} />
      </View>
      */}

      <TouchableOpacity
        style={st.menuItem}
        onPress={navigateToScreen('FAQ')}
        activeOpacity={ACTIVE_OPACITY}>
        <Text>Вопросы и ответы</Text>
        <IconArrowRight />
      </TouchableOpacity>

      <TouchableOpacity
        style={st.menuItem}
        onPress={navigateToScreen('AppInfo')}
        activeOpacity={ACTIVE_OPACITY}>
        <Text>Состояние приложения</Text>
        <IconArrowRight />
      </TouchableOpacity>
      {Boolean(is_admin) && (
        <TextInput
          value={proxy}
          labelStyle={st.inputLabel}
          onChangeText={setProxy}
          style={st.input}
          label={'Proxy'}
          addAfter={
            <ButtonContainer onPress={onSaveProxy} disabled={baseUrl === proxy}>
              <Text style={baseUrl !== proxy && st.save}>Save</Text>
            </ButtonContainer>
          }
        />
      )}

      {/*
      <View style={st.inviteCard}>
        <Text style={st.boldText}>
          {'Пригласите друга и\nполучите 100 бонусов!'}
        </Text>
        <Button
          text="пригласить"
          containerStyle={st.button}
          textStyle={st.buttonText}
          onPress={navigateToScreen('InviteFriendModal')}
        />

        <Image source={imgReferral} style={st.image} />
      </View>
      */}

      <ButtonContainer style={st.logout} onPress={onLogoutPress}>
        <Text style={st.logoutText}>Выйти из аккаунта</Text>
      </ButtonContainer>
    </ScreenScrollContainer>
  );
};

export default Profile;
