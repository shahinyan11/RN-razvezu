import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {defaultStackOptions} from '@navigation/options';
import Transactions from '@screens/Wallet/Transactions';
import {TEXT_COLORS} from '@constants/styles/colors';
import BottomTab from '@navigation/navigators/BottomTab';

const Stack = createNativeStackNavigator();

const WalletStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        initialParams={{initialTab: 'Wallet'}}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Transactions"
        component={Transactions}
        options={{
          headerTitle: 'История транзакций',
          headerTintColor: TEXT_COLORS.WHITE,
        }}
      />
    </Stack.Navigator>
  );
};

export default WalletStack;
