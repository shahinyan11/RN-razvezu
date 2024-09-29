import React from 'react';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';
import useScreenContainer from '@hooks/useScreenContainer';

import st from './styles';
import Markdown from 'react-native-markdown-display';

const ExploreModal = ({route}) => {
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const {instruction} = route.params;

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        index={0}
        topInset={containerStyle.paddingTop}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        enableDynamicSizing={true}
        enablePanDownToClose={true}>
        <BottomSheetScrollView contentContainerStyle={st.content}>
          <Markdown>{instruction}</Markdown>
        </BottomSheetScrollView>
      </BottomSheet>
    </View>
  );
};

export default ExploreModal;
