import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Linking, Text, View} from 'react-native';
import Button from '@components/buttons/Button';

import {selectUserStore} from '@store/user/selectors';
import st from './styles';
import {closeBottomSheet, openBottomSheet} from '@store/modal';
import {navigate} from '@navigation/RootNavigation';
import {scaledSize} from '@utils/scaledSizes';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const DATA = {
  IE: {
    title: 'ИП',
    text: 'Для дальнейшего использования приложения вам необходимо подтвердить ваш статус Индивидуального предпринимателя',
    buttonText: 'ИП не оформлено',
  },
  SE: {
    title: 'Самозанятость',
    text: 'Для дальнейшего использования\nприложения вам необходимо подтвердить\nваш статус Самозанятого',
    buttonText: 'Самозанятость не оформлена',
  },
};

const EmploymentSheet = ({type}) => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const {user} = useSelector(selectUserStore);

  const handleConfirmSE = () =>
    dispatch(openBottomSheet({type: 'SELF_EMPLOYMENT'}));

  const handleConfirmIE = () => {
    navigate('IE');
    dispatch(closeBottomSheet());
  };

  const onNotRegisteredPress = () => {
    const url =
      type === 'SE'
        ? user?.self_employment_unregistered
        : user?.individual_entrepreneur_unregistered;

    Linking.openURL(url);
  };

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
        <View style={st.content}>
          <Text style={st.title}>{DATA[type].title}</Text>
          <Text style={st.text}>{DATA[type].text}</Text>

          <Button
            containerStyle={st.button}
            text={'Подтвердить'}
            onPress={type === 'SE' ? handleConfirmSE : handleConfirmIE}
          />
          <Button
            theme="transparent"
            containerStyle={st.button}
            text={DATA[type].buttonText}
            onPress={onNotRegisteredPress}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default EmploymentSheet;
