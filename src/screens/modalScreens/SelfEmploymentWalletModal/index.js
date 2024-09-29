import React, {useRef} from 'react';
import {useSelector} from 'react-redux';
import {View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import WebView from 'react-native-webview';
import useScreenContainer from '@hooks/useScreenContainer';
import {selectUserStore} from '@store/user/selectors';
import st from './styles';

const SelfEmploymentModal = () => {
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const bottomSheetRef = useRef();
  const {user} = useSelector(selectUserStore);

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        topInset={containerStyle.paddingTop}
        snapPoints={['100%']}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        enablePanDownToClose={true}
        enableContentPanningGesture={false}>
        <BottomSheetView style={st.content}>
          <WebView
            originWhitelist={['*']}
            source={{uri: user?.create_self_employment}}
            // injectedJavaScript={INJECTED_JAVASCRIPT}
          />
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
};

export default SelfEmploymentModal;
