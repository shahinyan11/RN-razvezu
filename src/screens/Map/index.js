import React, {useEffect, useRef, useState} from 'react';
import MapView, {MAP_TYPES, Marker, UrlTile} from 'react-native-maps';
import {FlatList, Platform, View} from 'react-native';
import {useSelector} from 'react-redux';

import {IconDirectUp, IconZoomIn, IconZoomOut} from '@assets/svgs/map';
import MAP_STYLE from '@constants/styles/mapStyle';
import {SCREEN_WIDTH} from '@constants/device';
import {scaledSize} from '@utils/scaledSizes';
import useGeolocation from '@hooks/useGeolocation';
import {selectDepots} from '@store/depots/selectors';
import ButtonContainer from '@components/buttons/ButtonContainer';
import DepotMarker from '@components/mapMarkers/DepotMarker';
import DepotCard from '@components/cards/DepotCard';
import Header from './Header';
import st from './styles';
import {URL_TILE} from '@constants/index';

const Map = () => {
  const mapRef = useRef(undefined);
  const depots = useSelector(selectDepots);
  const [active, setActive] = useState(undefined);
  const userRegion = useGeolocation();
  const currentRegion = useRef({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useEffect(() => {
    const {lat, lon} = depots?.[0] || {};

    currentRegion.current = {
      latitude: lat || 0,
      longitude: lon || 0,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    };

    if (userRegion) {
      currentRegion.current = userRegion;
    }

    mapRef.current?.animateToRegion(currentRegion.current);
  }, [userRegion]);

  const handleMapPress = () => {
    setActive(undefined);
  };

  const handleMarkerPress = data => () => {
    setActive(active?.depot_id !== data.depot_id ? data : undefined);
  };

  const handleZoomIn = () => {
    let {latitude, longitude, latitudeDelta, longitudeDelta} =
      currentRegion.current;

    currentRegion.current = {
      latitude,
      longitude,
      latitudeDelta: latitudeDelta / 2,
      longitudeDelta: longitudeDelta / 2,
    };

    mapRef?.current?.animateToRegion(currentRegion.current);
  };

  const handleZoomOut = () => {
    const {latitude, longitude, latitudeDelta, longitudeDelta} =
      currentRegion.current;

    currentRegion.current = {
      latitude,
      longitude,
      latitudeDelta: latitudeDelta * 2,
      longitudeDelta: longitudeDelta * 2,
    };

    mapRef?.current?.animateToRegion(currentRegion.current);
  };

  const handleRegionChange = region => {
    // mapRef.current?.animateToRegion(currentRegion);
  };

  const animateToUserRegin = () => {
    currentRegion.current = userRegion;
    mapRef.current?.animateToRegion(currentRegion.current);
  };

  const onDepotCardPress = item => () => {
    mapRef.current?.animateToRegion({
      latitude: +item.lat,
      longitude: +item.lon,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });
  };

  return (
    <View style={st.container}>
      <MapView
        ref={mapRef}
        style={st.map}
        onPress={handleMapPress}
        onRegionChange={handleRegionChange}
        customMapStyle={MAP_STYLE}
        mapType={Platform.select({android: MAP_TYPES.NONE})}>
        <UrlTile urlTemplate={URL_TILE} shouldReplaceMapContent={true} />
        {depots.map(item => (
          <Marker
            key={item.depot_id}
            onPress={handleMarkerPress(item)}
            coordinate={{
              latitude: +item.lat,
              longitude: +item.lon,
            }}>
            <DepotMarker isActive iconUrl={item?.logo} />
          </Marker>
        ))}
      </MapView>
      <View style={st.buttonsContainer}>
        <IconZoomIn style={st.button} onPress={handleZoomIn} />
        <IconZoomOut style={st.button} onPress={handleZoomOut} />
        <IconDirectUp style={st.button} onPress={animateToUserRegin} />
      </View>

      <View style={st.cardContainer}>
        <FlatList
          data={[...depots, ...depots, ...depots, ...depots]}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={SCREEN_WIDTH - 30}
          decelerationRate={500}
          contentContainerStyle={{paddingHorizontal: 20}}
          ItemSeparatorComponent={() => (
            <View style={{width: scaledSize(10)}} />
          )}
          renderItem={({item}) => (
            <ButtonContainer onPress={onDepotCardPress(item)}>
              <DepotCard
                {...item}
                containerStyle={{
                  width: SCREEN_WIDTH - 40,
                  marginTop: 'auto',
                }}
              />
            </ButtonContainer>
          )}
        />
      </View>
      <Header />
    </View>
  );
};

export default Map;
