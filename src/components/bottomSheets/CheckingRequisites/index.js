import React from 'react';
import {useDispatch} from 'react-redux';
import {Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';

import {scaledSize} from '@utils/scaledSizes';
import {closeBottomSheet, openBottomSheet} from '@store/modal';
import Button from '@components/buttons/Button';
import st from './styles';

const CheckingRequisites = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();

  const handlePress = type => () =>
    dispatch(openBottomSheet({type: 'EMPLOYMENT', data: {type}}));

  const handleClose = () => dispatch(closeBottomSheet());

  return (
    <BottomSheet
      topInset={insets.top + scaledSize(60)}
      index={0}
      onClose={handleClose}
      containerStyle={st.container}
      backgroundStyle={st.sheetBackground}
      handleIndicatorStyle={st.indicator}
      keyboardBehavior="extend"
      enablePanDownToClose={true}
      enableDynamicSizing={true}>
      <BottomSheetView style={st.content}>
        <Text style={st.title}>Ваши реквизиты проходят проверку</Text>
        <Text style={st.text}>
          Проверка может занимать до 48 часов. В случае проблем с Вами свяжется
          специалист службы поддержки.
        </Text>
        <Button
          text={'Подтвердить'}
          onPress={handlePress('SE')}
          containerStyle={st.button}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CheckingRequisites;
