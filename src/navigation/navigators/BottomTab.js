import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabBar from '@components/BottomTabBar';
import {
  IconChats,
  IconHistory,
  IconProfile,
  IconWallet,
  IconWarehouses,
} from '@assets/svgs/tabBar';
import {MAIN_COLORS} from '@constants/styles/colors';
import Profile from '@screens/Profile';
import Chats from '@screens/Chats';
import Depots from '@screens/Depots';
import Wallet from '@screens/Wallet';
import RoutesTab from '@navigation/navigators/RoutesTab';

const Tab = createBottomTabNavigator();

const BottomTab = ({route}) => {
  return (
    <Tab.Navigator
      tabBar={BottomTabBar}
      initialRouteName={route.params?.initialTab}
      screenOptions={{headerShown: false}}
      sceneContainerStyle={{backgroundColor: MAIN_COLORS.BLACK}}>
      <Tab.Screen
        name="Depots"
        component={Depots}
        options={{
          headerShown: false,
          tabBarLabel: 'Склады',
          tabBarIcon: ({color}) => <IconWarehouses color={color} />,
        }}
      />
      <Tab.Screen
        name="Routes"
        component={RoutesTab}
        options={{
          title: 'Маршруты',
          tabBarIcon: ({color}) => <IconHistory color={color} />,
        }}
      />
      {/*
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          title: 'Чаты',
          tabBarIcon: ({color}) => <IconChats color={color} />,
        }}
      />
      */}
      <Tab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Кошелек',
          tabBarIcon: ({color}) => <IconWallet color={color} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          title: 'Профиль',
          tabBarIcon: ({color}) => <IconProfile color={color} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
