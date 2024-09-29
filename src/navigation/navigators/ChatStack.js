import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {defaultStackOptions} from '@navigation/options';

// import Chats from '@screens/Chats';
import Conversation from '@screens/Chats/Conversation';
import BottomTab from '@navigation/navigators/BottomTab';

const Stack = createNativeStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={defaultStackOptions}>
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
        initialParams={{initialTab: 'Chats'}}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Conversation"
        component={Conversation}
        options={{
          headerShown: false,
          tabBarVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
