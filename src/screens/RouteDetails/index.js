import React, {useCallback, useEffect, useRef} from 'react';
import MapView, {MAP_TYPES, Marker, UrlTile} from 'react-native-maps';
import {Platform, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {currentRouteSelector} from '@store/routes/selectors';
import useGeolocation from '@hooks/useGeolocation';
import {getRouteByIdRequest} from '@store/routes/operations';
import Locations from './Locations';
import st from './styles';
import {ROUTE_STATUSES} from '@constants/status';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import LocationMarker from '@components/mapMarkers/LocationMarker';
import {URL_TILE} from '@constants/index';

const RouteDetails = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const mapRef = useRef(undefined);
  const {status, location} = useSelector(currentRouteSelector);
  const userRegion = useGeolocation();
  const currentRegion = useRef({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  useFocusEffect(
    useCallback(() => {
      getData();
    }, [id]),
  );

  const getData = () => {
    dispatch(getRouteByIdRequest(id));
  };

  useEffect(() => {
    const {lat, lon} = location?.[0] || {};

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

  const handleMarkerPress = data => () => {
    if (status !== ROUTE_STATUSES.NEW) {
      const route =
        data.location_type === 'depot' ? 'LocationDepot' : 'Location';

      navigation.navigate(route, {location_id: data.location_id});
    }
  };

  return (
    <View style={st.container}>
      <View style={{flex: 1}}>
        <MapView
          ref={mapRef}
          style={st.map}
          showsUserLocation={true}
          mapType={Platform.select({android: MAP_TYPES.NONE})}>
          <UrlTile urlTemplate={URL_TILE} />
          {location?.map((item, inex) => (
            <Marker
              key={item.location_id}
              onPress={handleMarkerPress(item)}
              coordinate={{
                latitude: +item.lat,
                longitude: +item.lon,
              }}>
              <LocationMarker status={item?.status} number={inex + 1} />
            </Marker>
          ))}
        </MapView>
        <Locations />
      </View>
    </View>
  );
};

export default RouteDetails;
