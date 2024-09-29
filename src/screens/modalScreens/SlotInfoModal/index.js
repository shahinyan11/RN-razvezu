import React, {useRef} from 'react';
import {Alert, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet';
import moment from 'moment';

import useDispatchRequest from '@hooks/useDispatchRequest';
import useScreenContainer from '@hooks/useScreenContainer';
import DATE_FORMATS from '@constants/dateFormats';
import {SLOT_STATUS} from '@constants/status';
import {scaledSize} from '@utils/scaledSizes';
import {bookingSlotsRequest, cancelSlotRequest} from '@store/slots/operations';
import Button from '@components/buttons/Button';

import st from './styles';

const SlotInfoModal = ({route}) => {
  const bottomSheetRef = useRef();
  const navigation = useNavigation();
  const {containerStyle} = useScreenContainer();
  const {dispatch, loading} = useDispatchRequest();
  const {date, slot} = route.params;
  const {description, interval} = slot;
  const {time_interval_start, time_interval_finish} = interval;
  const isCancelable = slot.status !== SLOT_STATUS.NO_REQUESTS;

  const onPress = () => {
    if (isCancelable) {
      Alert.alert('Вы действительно хотите отказаться?', '', [
        {
          text: 'Подтвердить',
          onPress: () => dispatch(cancelSlotRequest({date, id: slot.slots_id})),
        },
        {
          text: 'Отменить',
          style: 'cancel',
        },
      ]);

      return;
    }

    dispatch(
      bookingSlotsRequest({
        date,
        time_interval_start,
        time_interval_finish,
      }),
    );
  };

  const subTitle = moment(date, 'DD/MM/YYYY').calendar(
    DATE_FORMATS.WEEK_MONTH_DAY,
  );

  const handleClose = () => {
    navigation.goBack();
  };

  return (
    <View style={st.container}>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        topInset={containerStyle.paddingTop}
        snapPoints={[scaledSize(430)]}
        onClose={handleClose}
        backgroundStyle={st.sheetBackground}
        handleIndicatorStyle={st.indicator}
        enablePanDownToClose={true}>
        <View style={st.content}>
          <View style={st.top}>
            <Text style={st.h2}>Информация о слоте</Text>
            <Text style={st.subTitle}>{subTitle}</Text>
          </View>

          <View style={st.whiteContainer}>
            <View style={st.greyContainer}>
              <Text style={st.label}>Интервал</Text>
              <Text style={st.value}>
                {time_interval_start} - {time_interval_finish}
              </Text>

              <Text style={st.label}>Описание</Text>
              <Text style={st.value}>{description}</Text>
            </View>

            <Button
              text={isCancelable ? 'Отказаться' : 'Выбрать слот'}
              onPress={onPress}
              theme={isCancelable ? 'cancelTransparent' : 'black'}
              isLoading={loading}
            />
          </View>
        </View>
      </BottomSheet>
    </View>
  );
};

export default SlotInfoModal;
