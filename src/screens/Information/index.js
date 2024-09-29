import React, {useEffect} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {DATA_BY_STATUS} from '@constants/user';
import useScreenContainer from '@hooks/useScreenContainer';
import {selectUserStatus} from '@store/user/selectors';
import Button from '@components/buttons/Button';
import st from './styles';
import {userInfoRequest} from '@store/user/operations';
import {ACTIVE_OPACITY} from '@constants/index';
import {useNavigation} from '@react-navigation/native';

const Information = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const userStatus = useSelector(selectUserStatus);
  const screenData = DATA_BY_STATUS[userStatus];
  const {image, title, text, firstButton, secondButton} = screenData || {};

  useEffect(() => {
    dispatch(userInfoRequest());

    const unsubscribe = navigation.addListener('beforeRemove', e => {
      if (e.data.action.type === 'GO_BACK') {
        e.preventDefault();
        return;
      }

      navigation.dispatch(e.data.action);
    });

    return unsubscribe;
  }, []);

  return (
    <View style={containerStyle}>
      <View style={st.imgContainer}>
        <Image source={image} style={st.img} />
      </View>
      <View style={st.whiteContainer}>
        <Text style={st.title}>{title}</Text>
        <Text style={st.text}>{text}</Text>
        <Button
          text={firstButton?.text}
          onPress={firstButton?.onPress}
          containerStyle={st.button}
        />
        {secondButton && (
          <TouchableOpacity
            style={st.button}
            onPress={secondButton.onPress}
            activeOpacity={ACTIVE_OPACITY}>
            <Text style={st.buttonText}>{secondButton.text}</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Information;
