import {useEffect, useRef} from 'react';
import BackgroundGeolocation from 'react-native-background-geolocation';
import {useSelector} from 'react-redux';
import {currentRouteSelector} from '@store/routes/selectors';
import {Platform} from 'react-native';
import store from '@store';
import Toast from 'react-native-toast-message';
import TEXTS from '@constants/texts';
import BackgroundFetch from 'react-native-background-fetch';

const useGeolocationTracking = () => {
  const isReady = useRef(false);
  const {route_id} = useSelector(currentRouteSelector);

  useEffect(() => {
    const onLocation = BackgroundGeolocation.onLocation(location => {
      //  console.log('[onLocation]', location);
    });

    const onMotionChange = BackgroundGeolocation.onMotionChange(event => {
      //  console.log('[onMotionChange]', event);
    });

    const onActivityChange = BackgroundGeolocation.onActivityChange(event => {
      //  console.log('[onActivityChange]', event);
    });

    const onProviderChange = BackgroundGeolocation.onProviderChange(event => {
      //  console.log('[onProviderChange]', event);
    });

    /// 2. ready the plugin.
    BackgroundGeolocation.ready({
      // Geolocation Config
      TrackingMode: 1,
      locationAuthorizationRequest: 'Any', // По умолчанию норм
      backgroundPermissionRationale: {
        title:
          'Разрешить доступ к местоположению этого устройства в фоновом режиме?',
        message: 'Необходимо обязательно разрешить доступ к местоположению',
        positiveAction: 'Изменить на «Разрешить все время»',
        negativeAction: 'Отменить',
      },
      heartbeatInterval: 10,
      desiredAccuracy: BackgroundGeolocation.DESIRED_ACCURACY_HIGH, // Точность WIFI+GPS+Cellular
      // distanceFilter: 0, // TODO Убрать должно быть по умолчанию ссчитает умно в метрах
      disableElasticity: false,
      elasticityMultiplier: 1,
      geofenceProximityRadius: 1000,
      stopAfterElapsedMinutes: 0,
      desiredOdometerAccuracy: 100,
      useSignificantChangesOnly: false,
      showsBackgroundLocationIndicator: false,
      // locationUpdateInterval: 30000,
      fastestLocationUpdateInterval: -1,
      deferTime: 0,
      geofenceModeHighAccuracy: false,
      // Activity Recognition
      stopTimeout: 15, // Минут через которое устройство неактиавно
      disableMotionActivityUpdates: false,
      disableStopDetection: false,
      motionTriggerDelay: 0,
      // Application config
      debug: false, // <-- enable this hear sounds for background-geolocation life-cycle.
      logLevel: BackgroundGeolocation.LOG_LEVEL_VERBOSE,
      stopOnTerminate: false, // <-- Allow the background-service to continue tracking when user closes the app.
      startOnBoot: true, // <-- Auto start tracking when device is powered-up.
      // HTTP / SQLite config
      url: 'https://api.razvezu.pro/api/v1/routes/tracking', // TODO URL КУДА СЛАТЬ КОРДЫ
      batchSync: true, // <-- [Default: false] Set true to sync locations to server in a single HTTP request.
      maxBatchSize: 30,
      autoSync: true, // <-- [Default: true] Set true to sync each location to server as it arrives.
      autoSyncThreshold: 15,
      disableAutoSyncOnCellular: false,
      maxRecordsToPersist: 1000,
      maxDaysToPersist: 1,
      speedJumpFilter: 30,
      persistMode: BackgroundGeolocation.PERSIST_MODE_ALL,
      disableLocationAuthorizationAlert: false,
      params: {
        // <-- Optional HTTP params
        route_id,
        system: Platform,
      },
    })
      .then(state => {
        // console.log('staet', state);
        isReady.current = true;
        // setEnabled(state.enabled);
      })
      .catch(error => {
        Toast.show({
          type: 'error',
          text1: TEXTS.GEOLOCATION_PERMISSION,
        });
      });

    return () => {
      // Remove BackgroundGeolocation event-subscribers when the View is removed or refreshed
      // during development live-reload.  Without this, event-listeners will accumulate with
      // each refresh during live-reload.
      onLocation.remove();
      onMotionChange.remove();
      onActivityChange.remove();
      onProviderChange.remove();
    };
  }, []);
};

export default useGeolocationTracking;

export const setConfigBackgroundGeolocation = (token, is_admin) => {
  console.log('setConfigBackgroundGeolocation');
  const {baseUrl} = store.getState().configs;
  BackgroundGeolocation.setConfig({
    url: baseUrl + '/routes/tracking',
    debug: Boolean(is_admin),
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  }).then(state => {
    // console.log('[setConfig] success: ', state);
  });
};

export const startRouteTracking = route_start => {
  if (route_start) {
    BackgroundGeolocation.setConfig({
      locationAuthorizationRequest: 'Always',
    }).then(state => {
      // console.log('[setConfig] success: ', state);
    });

    BackgroundGeolocation.start();
    BackgroundGeolocation.changePace(true);
    initBackgroundFetch();
  } else {
    BackgroundGeolocation.setConfig({locationAuthorizationRequest: 'Any'}).then(
      state => {
        // console.log('[setConfig] success: ', state);
      },
    );

    BackgroundGeolocation.changePace(false);
    BackgroundGeolocation.stop();
    BackgroundFetch.stop();
  }
};

export const initBackgroundFetch = async () => {
  console.log('[BackgroundFetch]', BackgroundFetch);
  BackgroundFetch.configure(
    {
      minimumFetchInterval: 15,
      enableHeadless: true,
      stopOnTerminate: false,
    },
    async taskId => {
      console.log('[BackgroundFetch]', taskId);
      const location = await BackgroundGeolocation.getCurrentPosition({
        extras: {
          event: 'background-fetch',
        },
        maximumAge: 10000,
        persist: true,
        timeout: 30,
        samples: 2,
      });
      console.log('[getCurrentPosition]', location);
      BackgroundFetch.finish(taskId);
    },
    async taskId => {
      console.log('[BackgroundFetch] TIMEOUT:', taskId);
      BackgroundFetch.finish(taskId);
    },
  );
};
