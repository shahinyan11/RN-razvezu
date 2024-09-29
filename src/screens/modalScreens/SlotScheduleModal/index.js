import React, {useEffect, useRef} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useNavigation} from '@react-navigation/native';

import {getSlotsRequest} from '@store/slots/operations';
import {selectSlotGroups} from '@store/slots/selectors';
import SlotScheduleCard from '@components/cards/SlotScheduleCard';
import st from './styles';

import useScreenContainer from '@hooks/useScreenContainer';
import useDispatchRequest from '@hooks/useDispatchRequest';
import Loader from '@components/Loader';
import Empty from '@components/listEmpty/Empty';

const SlotScheduleModal = () => {
  const bottomSheetRef = useRef();
  const {dispatch, loading} = useDispatchRequest();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const slotGroups = useSelector(selectSlotGroups);

  useEffect(() => {
    dispatch(getSlotsRequest());
  }, []);

  const renderItem = ({item}) => <SlotScheduleCard {...item} />;

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        topInset={containerStyle.paddingTop}
        snapPoints={['95%']}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        enablePanDownToClose={true}>
        <View style={st.content}>
          <Text style={st.title}>Расписание слотов</Text>
          <Text style={st.text}>
            Выберите ближайшую дату, в которую вам удобно взять маршрут
          </Text>

          <BottomSheetFlatList
            data={slotGroups}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={st.scrollContainer}
            onEndReachedThreshold={0.2}
            ListEmptyComponent={
              loading ? <Loader size={40} containerStyle={st.loader} /> : Empty
            }
          />
        </View>
      </BottomSheet>
    </View>
  );
};

export default SlotScheduleModal;
