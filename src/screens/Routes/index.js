import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useFocusEffect} from '@react-navigation/native';

import {getRoutesRequest} from '@store/routes/operations';
import {storeSelector} from '@store/routes/selectors';
import RouteCard from '@components/cards/RouteCard';
import st from './styles';

const Routes = ({route}) => {
  const {params} = route;
  const dispatch = useDispatch();
  const {activeRoutes, completedRoutes} = useSelector(storeSelector);

  useFocusEffect(
    useCallback(() => {
      dispatch(getRoutesRequest(params));
    }, [params]),
  );

  const renderItem = ({item}) => {
    return (
      <RouteCard
        route={item}
        containerStyle={st.cardContainer}
        isActive={params.active}
      />
    );
  };

  return (
    <FlatList
      contentContainerStyle={st.containerStyle}
      data={params.active ? activeRoutes : completedRoutes}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default Routes;
