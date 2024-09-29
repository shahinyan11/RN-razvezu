import React, {useState} from 'react';
import {RefreshControl, ScrollView, View} from 'react-native';

import useScreenContainer from '@hooks/useScreenContainer';
import Story from '@components/Story';
import st from './styles';

const ScreenScrollContainer = ({
  whiteContainerStyle,
  children,
  HeaderComponent,
  onRefresh,
  showStories = false,
}) => {
  const [refreshing, setRefreshing] = useState(false);
  const {containerStyle} = useScreenContainer();

  const handleRefresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  return (
    <View style={containerStyle}>
      <ScrollView
        refreshControl={
          onRefresh && (
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          )
        }
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
        stickyHeaderHiddenOnScroll={true}
        contentContainerStyle={st.scrollContainer}>
        <View style={st.header}>{HeaderComponent}</View>
        {showStories && <Story />}
        <View style={[st.whiteContainer, whiteContainerStyle]}>{children}</View>
      </ScrollView>
    </View>
  );
};

export default ScreenScrollContainer;
