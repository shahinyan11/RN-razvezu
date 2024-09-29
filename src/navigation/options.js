import React from 'react';

import BackButton from '../components/buttons/BackButton';
import {MAIN_COLORS, TEXT_COLORS} from '@constants/styles/colors';
import {View} from 'react-native';

export const defaultStackOptions = ({navigation}) => ({
  headerTitle: '',
  headerTransparent: true,
  contentStyle: {backgroundColor: MAIN_COLORS.BLACK},
  headerLeft: () => <BackButton style={{marginRight: 12}} />,
  animation: 'slide_from_right',
});

export const fillUserInfoStackOptions = ({navigation}) => ({
  headerShown: false,
  headerStyle: {
    backgroundColor: MAIN_COLORS.BLACK,
  },
  headerLeft: () => <BackButton />,
  animation: 'slide_from_right',
});

export const verificationStackOptions = ({navigation}) => ({
  headerTintColor: TEXT_COLORS.WHITE,
  headerTransparent: true,
  contentStyle: {backgroundColor: MAIN_COLORS.BLACK},
  headerLeft: () => <BackButton style={{marginRight: 12}} />,
  animation: 'slide_from_right',
});

export const modalScreenOptions = ({route}) => {
  const headerLessScreens = [
    'SlotScheduleModal',
    'TakePhotoModal',
    'OrderCancelModal',
    'SignatureModal',
  ];

  return {
    headerTitle: '',
    contentStyle: {backgroundColor: 'transparent'},
    presentation: 'transparentModal',
    headerLeft: () => <View />,
    animation: 'none',
    headerShown: !headerLessScreens.includes(route.name),
  };
};
