import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';

import {defaultStackOptions} from '@navigation/options';
import BottomTab from '@navigation/navigators/BottomTab';

import {userSelector} from '@store/user/selectors';

const Stack = createNativeStackNavigator();

const DepotsStack = () => {
  const {route_start} = useSelector(userSelector);

  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        initialParams={{initialTab: route_start ? 'Routes' : 'Depots'}}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DepotsStack;
