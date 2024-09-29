import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {verificationStackOptions} from '@navigation/options';
import Verification from '@screens/Verification';
import VerifyPassport from '@screens/Verification/VerifyPassport';
import VerifyDriverLicense from '@screens/Verification/VerifyDriverLicense';
import VerifyCar from '@screens/Verification/VerifyCar';
import VerifyCarDoc from '@screens/Verification/VerifyCarDoc';

const Stack = createNativeStackNavigator();

const VerificationStack = () => {
  return (
    <Stack.Navigator screenOptions={verificationStackOptions}>
      <Stack.Screen
        name="Verification"
        component={Verification}
        options={{
          headerTitle: 'Проверка данных',
        }}
      />
      <Stack.Screen name="VerifyPassport" component={VerifyPassport} />
      <Stack.Screen
        name="VerifyDriverLicense"
        component={VerifyDriverLicense}
      />
      <Stack.Screen name="VerifyCarDoc" component={VerifyCarDoc} />
      <Stack.Screen name="VerifyCar" component={VerifyCar} />
    </Stack.Navigator>
  );
};

export default VerificationStack;
