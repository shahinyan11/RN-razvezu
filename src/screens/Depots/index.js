import React, {useEffect, useMemo, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import {IconArrowRight, IconCalendar} from '@assets/svgs/other';
import {MAIN_COLORS} from '@constants/styles/colors';
import {DEPOTS_TAB} from '@constants/tabs';
import {selectAvailableDepots, selectDepots} from '@store/depots/selectors';
import {fetchDepotsRequest} from '@store/depots/operations';
import EmptyDepots from '@components/listEmpty/EmptyDepots';
import DepotCard from '@components/cards/DepotCard';
import SlotCard from '@components/cards/SlotCard';
import StaticTab from '@components/StaticTab';

import st from './styles';
import {mapButton} from '@assets/images/baner';
import ButtonContainer from '@components/buttons/ButtonContainer';
import ScreenScrollContainer from '@components/containers/ScreenScrollContainer';
import Header from '@components/screenHeaders/Header';
import {USER_STATUS} from '@constants/user';
import {selectUserStatus} from '@store/user/selectors';
import DepotMarker from '@components/mapMarkers/DepotMarker';
import {getStoriesRequest} from '@store/user/operations';
import {openBottomSheet} from '@store/modal';

const Depots = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [tab, setTab] = useState(DEPOTS_TAB.ALL.id);
  const depots = useSelector(selectDepots);
  const availableDepots = useSelector(selectAvailableDepots);
  const userStatus = useSelector(selectUserStatus);

  useEffect(() => getData(), []);

  const getData = () => {
    dispatch(fetchDepotsRequest());
    dispatch(getStoriesRequest());
  };

  const navigateToMap = () => {
    navigation.navigate('Map');
  };

  const onAddSlots = () => {
    USER_STATUS.COURIER_UNVERIFIED === userStatus
      ? dispatch(openBottomSheet({type: 'LEGAL_FORM'}))
      : navigation.navigate('SlotScheduleModal');
  };

  const list = useMemo(() => {
    return tab === DEPOTS_TAB.ALL.id ? depots : availableDepots;
  }, [tab, depots]);

  return (
    <View style={st.container}>
      <ScreenScrollContainer
        onRefresh={getData}
        showStories={true}
        whiteContainerStyle={st.whiteContainer}
        HeaderComponent={
          <Header
            title="Список складов"
            showBackIcon={false}
            containerStyle={st.header}
          />
        }>
        <StaticTab
          tabs={Object.values(DEPOTS_TAB)}
          containerStyle={st.tabContainer}
          onChange={setTab}
        />

        {!list?.length && <EmptyDepots />}

        {Boolean(list.length) && (
          <>
            <ButtonContainer style={st.mapButton} onPress={navigateToMap}>
              <Image source={mapButton} style={st.mapButtonImage} />
              <View style={st.mapButtonOverlay}>
                <Text style={st.mapButtonText}>
                  Выбирайте на карте, так удобнее
                </Text>
                <DepotMarker isActive />
              </View>
            </ButtonContainer>

            {list?.map(item => (
              <DepotCard
                key={item.depot_id}
                containerStyle={st.cardContainer}
                {...item}
              />
            ))}
          </>
        )}
      </ScreenScrollContainer>
      <SlotCard
        containerStyle={st.button}
        leftIconBgColor={MAIN_COLORS.WHITE}
        leftIcon={<IconCalendar color={MAIN_COLORS.BLACK} />}
        rightIcon={<IconArrowRight color={MAIN_COLORS.WHITE} />}
        boldTextStyle={st.boldTextStyle}
        textStyle={st.textStyle}
        boldText={'Расписание слотов'}
        text={'Добавить слоты'}
        onPress={onAddSlots}
      />
    </View>
  );
};

export default Depots;
