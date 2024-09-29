import endpointMaker from '@helpers/endpointMaker';
import {routesLocationChange, routesStatus} from '@constants/apiRoutes';

export const changeRouteStatusEndpoint = endpointMaker({
  method: 'post',
  url: routesStatus,
});

export const locationChangeEndpoint = endpointMaker({
  method: 'post',
  url: routesLocationChange,
});
