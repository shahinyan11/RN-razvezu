import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import useScreenContainer from '@hooks/useScreenContainer';
import st from './styles';
// import {routesInfoRequest} from '@store/depots/operations';
import BackButton from '@components/buttons/BackButton';
import {selectRoutes} from '@store/depots/selectors';
import RouteCard from '@components/cards/RouteCard';

const Routes = ({route}) => {
  const dispatch = useDispatch();
  const {containerStyle} = useScreenContainer();
  const {depot_id, name, logo, address} = route.params;
  const routes = useSelector(selectRoutes);

  useEffect(() => {
    // dispatch(routesInfoRequest({depot_id}));
  }, []);

  const renderItem = ({item}) => {
    return <RouteCard route={item} containerStyle={st.cardContainer} />;
  };

  return (
    <View style={containerStyle}>
      <View style={st.header}>
        <BackButton />
        <Image source={{uri: logo}} style={st.logo} />
        <View>
          <Text style={st.title}>{name}</Text>
          <Text style={st.text}>{address}</Text>
        </View>
      </View>
      <View style={st.whiteContainer}>
        <View style={st.scrollHeader}>
          <Text style={st.h1}>Маршруты</Text>
          <View style={st.circle}>
            <Text style={st.countText}>{routes.length}</Text>
          </View>
        </View>
        <FlatList
          data={routes}
          renderItem={renderItem}
          keyExtractor={item => item.route_id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Routes;
