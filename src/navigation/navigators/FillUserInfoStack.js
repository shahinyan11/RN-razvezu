import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {fillUserInfoStackOptions} from '@navigation/options';
import UserInfo from '@screens/FillUserInfo/UserInfo';
import CarInfo from '@screens/FillUserInfo/CarInfo';

const Stack = createNativeStackNavigator();

const FillUserInfoStack = () => {
  return (
    <Stack.Navigator screenOptions={fillUserInfoStackOptions}>
      <Stack.Screen name="UserInfo" component={UserInfo} />
      <Stack.Screen name="CarInfo" component={CarInfo} />
    </Stack.Navigator>
  );
};

export default FillUserInfoStack;
