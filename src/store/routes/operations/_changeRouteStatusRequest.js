import httpClient from '@httpClient';
import {removeLoader, setLoader} from '@store/loader';
import {changeRouteStatusEndpoint} from '@store/routes/endpoints';
import {setRouteStatus} from '@store/routes';
import {ROUTE_STATUSES} from '@constants/status';
import {goBack} from '@navigation/RootNavigation';
import {startRouteTracking} from '@hooks/useGgeolocationTracking';

export default params => async dispatch => {
  const {endpoint, url} = changeRouteStatusEndpoint;
  dispatch(setLoader(endpoint));

  console.log(params.status, 'params.status');

  try {
    await httpClient.post(url, params);

    dispatch(setRouteStatus(params.status));
    // todo старт
    console.log(params.status, 'params.status');
    if (params.status === ROUTE_STATUSES.PROGRESS) {
      startRouteTracking(true);
    } else {
      startRouteTracking(false);
    }

    if (params.status === ROUTE_STATUSES.FINISHED) {
      goBack();
    }

    return true;
  } catch (e) {
    // TODO Старт записи маршрута
    console.log('_changeRouteStatusRequest', e);

    return false;
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
