import React from 'react';
import moment from 'moment';
import {FlatList} from 'react-native';

import DATE_FORMATS from '@constants/dateFormats';
import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import SlotCard from '@components/cards/SlotCard';
import Empty from '@components/listEmpty/Empty';

import st from './styles';
import {useNavigation} from '@react-navigation/native';
import InfoHeader from '@components/screenHeaders/InfoHeader';

const ChooseSlot = ({route}) => {
  const {date, slots} = route.params;
  const navigation = useNavigation();

  const onCardPress = slot => () => {
    navigation.navigate('SlotInfoModal', {
      date,
      slot,
    });
  };

  const headerDate = moment(date, 'DD/MM/YYYY').calendar(
    DATE_FORMATS.WEEK_MONTH_DAY,
  );

  const renderItem = ({item}) => {
    const {time_interval_start, time_interval_finish} = item.interval;

    return (
      <SlotCard
        boldText={`${time_interval_start} - ${time_interval_finish}`}
        text={item.short_desc}
        onPress={onCardPress(item)}
      />
    );
  };

  return (
    <ScreenScrollContainer
      HeaderComponent={<InfoHeader title="Выбор слота" text={headerDate} />}
      whiteContainerStyle={st.whiteContainer}>
      <FlatList
        data={slots}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={st.scrollContainer}
        onEndReachedThreshold={0.2}
        ListEmptyComponent={Empty}
      />
    </ScreenScrollContainer>
  );
};

export default ChooseSlot;
