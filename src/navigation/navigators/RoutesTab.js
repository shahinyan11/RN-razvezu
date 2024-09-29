import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {TopTabBar} from '@components/TopTabBar';
import Routes from '@screens/Routes';
import ScreenContainer from '@components/containers/ScreenContainer';
import Header from '@components/screenHeaders/Header';

const Tab = createMaterialTopTabNavigator();

const RoutesTab = () => {
  return (
    <ScreenContainer
      HeaderComponent={<Header title="Маршруты" showBackIcon={false} />}
      whiteContainerStyle={{paddingHorizontal: 0}}>
      <Tab.Navigator
        tabBar={TopTabBar}
        screenOptions={{lazy: true}}
        sceneContainerStyle={{backgroundColor: 'transparent'}}>
        <Tab.Screen
          name="Активные"
          component={Routes}
          initialParams={{active: true}}
        />
        <Tab.Screen
          name="Завершенные"
          component={Routes}
          initialParams={{completed: true}}
        />
      </Tab.Navigator>
    </ScreenContainer>
  );
};

export default RoutesTab;
