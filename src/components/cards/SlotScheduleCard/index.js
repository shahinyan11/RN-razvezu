import React, {useMemo} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';

import {MAIN_COLORS} from '@constants/styles/colors';
import Plus from '@assets/svgs/vectors/Plus';
import st from './styles';
import moment from 'moment/moment';
import DATE_FORMATS from '@constants/dateFormats';
import {IconArrowRight} from '@assets/svgs/other';
import {SLOT_STATUS} from '@constants/status';
import {useNavigation} from '@react-navigation/native';
import ButtonContainer from '@components/buttons/ButtonContainer';

const SlotScheduleCard = ({slots, date, containerStyle = {}}) => {
  const navigation = useNavigation();

  const readyWorkSlots = useMemo(
    () => slots.filter(slot => slot.status === SLOT_STATUS.READY_WORK),
    [slots],
  );

  const onPressAdd = () => {
    navigation.navigate('ChooseSlot', {date, slots});
  };

  const onPressSlot = slot => () => {
    navigation.navigate('SlotInfoModal', {
      date,
      slot,
    });
  };

  const renderItem = ({item}) => {
    return (
      <Pressable style={[st.row, st.grayBorder]} onPress={onPressSlot(item)}>
        <View>
          <Text style={st.slotName}>{item.slots_id}</Text>
          <Text style={st.text}>
            {item.status === SLOT_STATUS.READY_WORK
              ? 'Готов к работе'
              : 'Нет запроса'}
          </Text>
        </View>
        <IconArrowRight />
      </Pressable>
    );
  };

  const renderEmpty = () => (
    <View style={[st.row, st.grayBorder]}>
      <Text style={st.text}>Слоты не выбраны</Text>
    </View>
  );

  const {weekDay, monthDay} = useMemo(() => {
    const _date = moment(date, 'DD/MM/YYYY');

    return {
      weekDay: _date.calendar(null, DATE_FORMATS.WEEK_DAY),
      monthDay: _date.format('D MMMM'),
    };
  }, [date]);

  return (
    <View style={[st.container, containerStyle]}>
      <Pressable style={st.row} onPress={onPressAdd}>
        <View>
          <Text style={st.dateTitle}>{weekDay}</Text>
          <Text style={st.date}>{monthDay}</Text>
        </View>

        {slots.length > readyWorkSlots.length && (
          <ButtonContainer style={st.plus} onPress={onPressAdd}>
            <Plus color={MAIN_COLORS.WHITE} />
          </ButtonContainer>
        )}
      </Pressable>
      <FlatList
        data={readyWorkSlots}
        renderItem={renderItem}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
};
export default SlotScheduleCard;
