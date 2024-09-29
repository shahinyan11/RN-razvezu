import React, {useEffect, useState} from 'react';
import {Image, Linking, Pressable, Text, View} from 'react-native';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {getApps} from 'react-native-map-link';

import {MAP_APPS} from '@constants/index';
import st from './styles';
import {closeBottomSheet} from '@store/modal';
import {useDispatch} from 'react-redux';
import {LOCATION_STATUSES} from '@constants/status';
import getUserLocation from '@utils/getUserLocation';
import Loader from '@components/Loader';
import Switch from '@components/Switch';

const MapApps = ({locations}) => {
  const dispatch = useDispatch();
  const [availableApps, setAvailableApps] = useState([]);
  const [checked, setChecked] = useState(false);
  const [loaderId, setLoaderId] = useState(undefined);

  const isMultiLocation = locations.length > 1;

  useEffect(() => {
    getApps({
      latitude: locations[0].lat,
      longitude: locations[0].lon,
      appsWhiteList: Object.keys(MAP_APPS),
    }).then(res => {
      let _availableApps = res.sort((a, b) => {
        return MAP_APPS[a.id].order - MAP_APPS[b.id].order;
      });

      if (isMultiLocation) {
        _availableApps = _availableApps.filter(
          app => MAP_APPS[app.id].multiLocationSupport,
        );
      }

      setAvailableApps(_availableApps);
    });
  }, [isMultiLocation]);

  const handleClose = () => dispatch(closeBottomSheet());

  const handleOpen = id => async () => {
    setLoaderId(id);

    let _locations = [...locations];
    const currentLocation = await getUserLocation();

    if (currentLocation) {
      const {latitude: lat, longitude: lon} = currentLocation;
      _locations.unshift({lat, lon});
    }

    if (!checked) {
      _locations = _locations.filter(
        ({status}) => status !== LOCATION_STATUSES.FINISHED,
      );
    }

    const url = MAP_APPS[id].getDeepLink(_locations);

    Linking.openURL(url);

    setLoaderId(undefined);
  };

  const handleSwitch = val => setChecked(val);

  return (
    <BottomSheet
      index={0}
      onClose={handleClose}
      containerStyle={st.container}
      backgroundStyle={st.sheetBackground}
      handleComponent={null}
      enableDynamicSizing={true}
      enablePanDownToClose={true}>
      <BottomSheetView style={st.content}>
        <Text style={st.title}>Выберите навигатор</Text>
        {availableApps.map(({icon, id, open}) => (
          <Pressable
            key={id}
            onPress={isMultiLocation ? handleOpen(id) : open}
            style={st.row}>
            {loaderId === id && <Loader containerStyle={st.icon} />}
            {loaderId !== id && <Image source={icon} style={st.icon} />}
            <Text style={st.text}>{MAP_APPS[id].name}</Text>
          </Pressable>
        ))}
        {isMultiLocation && (
          <View style={st.row}>
            <Switch
              defaultActive={checked}
              onChange={handleSwitch}
              label={'Включая выполненные заказы'}
            />
          </View>
        )}
      </BottomSheetView>
    </BottomSheet>
  );
};

export default MapApps;
