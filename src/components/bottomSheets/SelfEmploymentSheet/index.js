import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import WebView from 'react-native-webview';
import {selectUserStore} from '@store/user/selectors';
import {scaledSize} from '@utils/scaledSizes';
import st from '@components/bottomSheets/CheckingRequisites/styles';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {closeBottomSheet} from '@store/modal';

const SelfEmploymentSheet = () => {
  const dispatch = useDispatch();
  const {user} = useSelector(selectUserStore);
  const insets = useSafeAreaInsets();

  const handleClose = () => dispatch(closeBottomSheet());

  return (
    <BottomSheet
      index={0}
      snapPoints={['100%']}
      topInset={insets.top + scaledSize(60)}
      onClose={handleClose}
      containerStyle={st.container}
      backgroundStyle={st.sheetBackground}
      handleIndicatorStyle={st.indicator}
      keyboardBehavior="extend"
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
  );
};

export default SelfEmploymentSheet;
