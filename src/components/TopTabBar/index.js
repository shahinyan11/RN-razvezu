import React from 'react';
import {Pressable, SafeAreaView, Text, View} from 'react-native';

import st from './styles';

export function TopTabBar({state, descriptors, navigation}) {
  return (
    <SafeAreaView>
      <View style={st.container}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Pressable
              key={index}
              onPress={onPress}
              style={[st.tab, isFocused && st.activeTab]}>
              <Text style={[st.tabLabel, isFocused && st.activeTabLabel]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </SafeAreaView>
  );
}
