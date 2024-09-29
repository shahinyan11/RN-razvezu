import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import st from './styles';
import {ACTIVE_OPACITY} from '@constants/index';

export default function StaticTab({onChange, tabs, containerStyle}) {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  useEffect(() => {
    onChange?.(activeTab);
  }, [onChange, activeTab]);

  return (
    <View style={[st.container, containerStyle]}>
      {tabs.map(({id, name}) => (
        <TouchableOpacity
          key={id}
          onPress={() => setActiveTab(id)}
          style={id === activeTab ? st.activeTabItem : st.tabItem}
          activeOpacity={ACTIVE_OPACITY}>
          <Text
            style={id === activeTab ? st.activeTabItemText : st.tabItemText}>
            {name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
