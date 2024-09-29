import React from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native';
import Button from '@components/buttons/Button';

import st from './styles';
import {closeBottomSheet, openBottomSheet} from '@store/modal';
import {scaledSize} from '@utils/scaledSizes';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const LegalFormSheet = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const handlePress = type => () =>
    dispatch(openBottomSheet({type: 'EMPLOYMENT', data: {type}}));

  const handleClose = () => dispatch(closeBottomSheet());

  return (
    <BottomSheet
      index={0}
      topInset={insets.top + scaledSize(60)}
      onClose={handleClose}
      containerStyle={st.container}
      backgroundStyle={st.sheetBackground}
      handleIndicatorStyle={st.indicator}
      keyboardBehavior="extend"
      enablePanDownToClose={true}
      enableDynamicSizing={true}>
      <BottomSheetView style={st.content}>
        <Text style={st.title}>Ваша организационно - правовая форма?</Text>
        <Text style={st.text}>
          Для дальнейшего использования приложения вам необходимо выбрать вашу
          организационно-правовую форму
        </Text>
        <Button
          text={'Самозанятый'}
          onPress={handlePress('SE')}
          containerStyle={st.button}
        />
        <Button
          text={'ИП'}
          onPress={handlePress('IE')}
          containerStyle={st.button}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default LegalFormSheet;
