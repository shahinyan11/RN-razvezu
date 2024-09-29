import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {userInfoRequest} from '@store/user/operations';
import messaging from '@react-native-firebase/messaging';
import useGeolocationTracking from '@hooks/useGgeolocationTracking';
import {requestUserPermission} from '@utils/notifications';
import {selectAuthToken} from '@store/auth/selectors';
import {userSelector} from '@store/user/selectors';
import BottomSheetRoot from '@components/BottomSheetRoot';
import Permission from '@components/modals/Permission';
import NoInternet from '@components/modals/NoInternet';
import Navigation from '@navigation/index';
import {bottomSheetSelector} from '@store/modal/selectors';

import {
  setConfigBackgroundGeolocation,
  startRouteTracking,
} from '@hooks/useGgeolocationTracking';

const Main = () => {
  const dispatch = useDispatch();
  const insets = useSafeAreaInsets();
  const {status, permission_required, route_start, is_admin} =
    useSelector(userSelector);
  const token = useSelector(selectAuthToken);
  const {type} = useSelector(bottomSheetSelector);

  useGeolocationTracking();
  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    dispatch(userInfoRequest());
  }, [token]);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  });

  useEffect(() => {
    if (status) {
      setConfigBackgroundGeolocation(token, is_admin);
      startRouteTracking(route_start || false);

      // Перенаправление на страницу маршрутов, если есть начатый маршрут
      if (route_start) {
        // navigation.navigate('WalletStack', {screen: 'Transactions'});
      }
    }
  }, [status, route_start, is_admin, token]);

  if (!status) {
    return null;
  }

  return (
    <View style={{...st.container, paddingBottom: insets.bottom}}>
      <Navigation />
      {type && <BottomSheetRoot />}
      {permission_required && <Permission />}
      <NoInternet />
    </View>
  );
};

export default Main;

const st = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
