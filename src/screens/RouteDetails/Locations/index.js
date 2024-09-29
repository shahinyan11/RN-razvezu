import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Text, View} from 'react-native';
import BottomSheet, {BottomSheetFlatList} from '@gorhom/bottom-sheet';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {ROUTE_STATUSES} from '@constants/status';
import {changeRouteStatusEndpoint} from '@store/routes/endpoints';
import {
  changeRouteStatusRequest,
  locationChangeRequest,
} from '@store/routes/operations';
import {currentRouteSelector} from '@store/routes/selectors';
import {selectLoaders} from '@store/loader/selectors';
import WaypointCard from '@components/cards/WaypointCard';
import Button from '@components/buttons/Button';
import st from './styles';
import TextSup from '@components/TextSup';
import ButtonContainer from '@components/buttons/ButtonContainer';
import Switch from '@components/Switch';
import {openBottomSheet} from '@store/modal';
import DraggableFlatList from 'react-native-draggable-flatlist';
import {scaledSize} from '@utils/scaledSizes';
import {IconNavigator} from '@assets/svgs/action';
import ChangeOrder from '@assets/svgs/action/ChangeOrder';
import {IconCheck} from '@assets/svgs/vectors';
import Toast from 'react-native-toast-message';
import {MAIN_COLORS} from '@constants/styles/colors';
import {LOCATION_STATUSES} from '@constants/status';
import formatToDecimal from '@utils/formatToDecimal';

const STORAGE_KEY = 'include_completed_orders';

export default function Locations() {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const currentRoute = useSelector(currentRouteSelector);
  const {
    volume,
    orders,
    route_id,
    location,
    status,
    distance,
    change_location,
  } = currentRoute;
  const [headerHeight, setHeaderHeight] = useState(80);
  const loaders = useSelector(selectLoaders);
  const {endpoint} = changeRouteStatusEndpoint;
  const [isOrderingActive, setIsEditModeActive] = useState(false);
  const sheetRef = useRef();
  const [listData, setListData] = useState([]);
  const [checked, setChecked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const originalData = useRef([]); // Хранение исходного порядка данных

  // Загрузка состояния checked из AsyncStorage
  useEffect(() => {
    const loadChecked = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value !== null) {
          setChecked(JSON.parse(value));
        }
      } catch (e) {
        console.error('Failed to load checked state.', e);
      } finally {
        setIsLoaded(true); // Данные загружены
      }
    };

    loadChecked();
  }, []);

  // Сохранение исходного порядка данных в originalData.current
  useEffect(() => {
    if (location) {
      originalData.current = location.map((item, index) => ({
        ...item,
        originalIndex: index,
      }));
      updateListData();
    }
  }, [location]);

  // Функция для обновления отображаемых данных в зависимости от состояния checked
  const updateListData = () => {
    const filteredData = originalData.current
      .filter(item => checked || item.status === LOCATION_STATUSES.NEW)
      .map((item, index) => ({
        ...item,
        index: index + 1,
        queue: index + 1,
      }));

    setListData(filteredData);
  };

  // Обновление listData при изменении состояния checked
  useEffect(() => {
    updateListData();
  }, [checked]);

  const snapPoints = useMemo(
    () => [headerHeight, '60%', '100%'],
    [headerHeight],
  );

  const onHeaderLayout = ({nativeEvent: {layout}}) => {
    setHeaderHeight(layout.height);
  };

  const onPressFinishRoute = () => {
    Alert.alert('Вы действительно хотите завершить маршрут?', '', [
      {
        text: 'Подтвердить',
        onPress: () =>
          dispatch(
            changeRouteStatusRequest({
              status: ROUTE_STATUSES.FINISHED,
              route_id,
            }),
          ),
      },
      {
        text: 'Отменить',
        style: 'cancel',
      },
    ]);
  };

  const onPressStartRoute = () => {
    dispatch(
      changeRouteStatusRequest({status: ROUTE_STATUSES.PROGRESS, route_id}),
    );
  };

  const handleOpenNavigator = async () => {
    dispatch(
      openBottomSheet({
        type: 'MAP_APPS',
        data: {locations: location},
      }),
    );
  };

  const toggleOrdering = () => {
    handleSwitch(true);
    setIsEditModeActive(!isOrderingActive);

    if (!isOrderingActive) {
      sheetRef.current.snapToIndex(snapPoints.length - 1);
    }
  };

  // Обновление originalData.current при перемещении элементов
  const handledrag = ({data, from, to}) => {
    const found = data
      .slice(to + 1)
      .find(item => item.location_id === data[to].depot_id);

    if (found) {
      Toast.show({type: 'error', text1: 'Изменение порядок не удалось'});
      return;
    }

    const updatedData = data.map((item, index) => ({
      ...item,
      index: index + 1,
      queue: index + 1,
    }));

    dispatch(
      locationChangeRequest({
        to: to,
        route_id,
        location_id: updatedData[to].location_id,
      }),
    )
      .then(success => {
        if (success) {
          setListData(updatedData);
          originalData.current = updatedData; // Обновление оригинальных данных
        }
      })
      .catch(error => {});
  };

  const isRouteStarted = status === ROUTE_STATUSES.PROGRESS;

  const renderItem = useCallback(
    ({item, drag, isActive, index, getIndex}) => {
      return (
        <WaypointCard
          index={item.index || getIndex?.()}
          location={item}
          containerStyle={{
            ...st.waypointContainer,
            backgroundColor: isActive
              ? MAIN_COLORS.WHITE_200
              : MAIN_COLORS.WHITE_244,
          }}
          onLongPress={isOrderingActive ? drag : null}
          disableOnPress={!isRouteStarted}
          disabled={isActive}
        />
      );
    },
    [isOrderingActive, isRouteStarted],
  );

  const ListComponent = useMemo(
    () => (!isOrderingActive ? BottomSheetFlatList : DraggableFlatList),
    [isOrderingActive],
  );

  const handleSwitch = async val => {
    setChecked(val);
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    } catch (e) {
      console.error('Failed to save checked state.', e);
    }
  };

  return (
    <BottomSheet
      ref={sheetRef}
      index={1}
      topInset={insets.top + scaledSize(60)}
      snapPoints={snapPoints}
      backgroundStyle={st.background}
      handleIndicatorStyle={st.indicator}
      handleComponent={null}
      enableContentPanningGesture={!isOrderingActive}
      enableHandlePanningGesture={!isOrderingActive}>
      <View style={st.topContainer} onLayout={onHeaderLayout}>
        <View style={st.topBubble}>
          <Text style={st.textMini}>Пробег</Text>
          <Text style={st.whiteText}>{formatToDecimal(distance)} км</Text>
        </View>
        <View style={st.bubbleDivider} />
        <View style={st.topBubble}>
          <Text style={st.textMini}>Пункты</Text>
          <Text style={st.whiteText}>{orders} шт</Text>
        </View>
        <View style={st.bubbleDivider} />
        <View style={st.topBubble}>
          <Text style={st.textMini}>Объем отсека</Text>
          <TextSup
            textStyle={st.whiteText}
            text={`${formatToDecimal(volume)} м`}
            sup={3}
          />
        </View>
      </View>
      <View style={st.whiteContainer}>
        {isLoaded && (
          <ListComponent
            data={listData}
            contentContainerStyle={st.scrollContainer}
            keyExtractor={item => item.queue}
            showsVerticalScrollIndicator={false}
            renderItem={renderItem}
            onDragEnd={handledrag}
            ListHeaderComponent={
              <View style={st.row}>
                <Text style={st.title}>Точки маршрута</Text>
                <View style={st.row}>
                  <ButtonContainer
                    style={st.blackRound}
                    onPress={handleOpenNavigator}>
                    <IconNavigator />
                  </ButtonContainer>
                  {change_location && (
                    <ButtonContainer
                      style={st.blackRound}
                      onPress={toggleOrdering}>
                      {!isOrderingActive ? <ChangeOrder /> : <IconCheck />}
                    </ButtonContainer>
                  )}
                </View>
              </View>
            }
            ListFooterComponent={
              <>
                <View style={st.menuItem}>
                  <Switch
                    label={'Включая выполненные заказы'}
                    defaultActive={checked}
                    disabled={isOrderingActive}
                    onChange={handleSwitch}
                  />
                </View>
                {currentRoute.comment && (
                  <View style={st.commentContainer}>
                    <Text style={st.commentTitle}>Комментарий к маршруту</Text>
                    <Text style={st.commentBubble}>
                      Необходимо позвонить оператору, перед получением заявкой,
                      подписать документ
                    </Text>
                  </View>
                )}
                <Button
                  containerStyle={st.button}
                  onPress={
                    isRouteStarted ? onPressFinishRoute : onPressStartRoute
                  }
                  isLoading={loaders[endpoint]}
                  text={isRouteStarted ? 'Завершить маршрут' : 'Начать маршрут'}
                />
              </>
            }
          />
        )}
      </View>
    </BottomSheet>
  );
}
