import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import st from './styles';
import {MAIN_COLORS} from '@constants/styles/colors';
import {ACTIVE_OPACITY} from '@constants/index';

const BottomTabBar = ({state, descriptors, navigation}) => {
  return (
    <View style={st.containerStyle}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

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
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={st.iconContainer}
            activeOpacity={ACTIVE_OPACITY}>
            <View>
              {options?.tabBarIcon?.({
                color: isFocused && MAIN_COLORS.BLACK,
              })}
            </View>

            <Text style={st.text}>
              {options?.tabBarLabel || options?.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomTabBar;
