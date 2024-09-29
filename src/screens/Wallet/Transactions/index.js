import React, {useLayoutEffect} from 'react';
import {TouchableOpacity} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import st from '@screens/Verification/VerifyCar/styles';
import {IconBack} from '@assets/svgs/action';
import {useNavigation} from '@react-navigation/native';
import {TopTabBar} from '@components/TopTabBar';
import TabContent from '@screens/Wallet/Transactions/TabContent';
import {ACTIVE_OPACITY} from '@constants/index';
import ScreenContainer from '@components/containers/ScreenContainer';

const Tab = createMaterialTopTabNavigator();

const Transactions = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={navigation.goBack}
          style={st.bacButton}
          activeOpacity={ACTIVE_OPACITY}>
          <IconBack />
        </TouchableOpacity>
      ),
    });
  });

  return (
    <ScreenContainer whiteContainerStyle={{paddingHorizontal: 0}}>
      <Tab.Navigator
        tabBar={TopTabBar}
        screenOptions={{lazy: true}}
        sceneContainerStyle={{
          backgroundColor: 'transparent',
        }}>
        <Tab.Screen
          name="Начисления"
          initialParams={{accruals: true}}
          component={TabContent}
        />
        <Tab.Screen name="Списания" component={TabContent} />
      </Tab.Navigator>
    </ScreenContainer>
  );
};

export default Transactions;
