import endpointMaker from '@helpers/endpointMaker';
import {
  locationByIdRoute,
  locationCancel,
  locationConfirm,
  locationPhoto,
  locationStart,
  orderCancelReasons,
} from '@constants/apiRoutes';

export const getLocationByIdEndpoint = id =>
  endpointMaker({method: 'get', url: locationByIdRoute(id)});

export const locationPhotoEndpoint = endpointMaker({
  method: 'post',
  url: locationPhoto,
});

export const getOrderCancelReasonsEndpoint = endpointMaker({
  method: 'get',
  url: orderCancelReasons,
});

export const locationCancelEndpoint = endpointMaker({
  method: 'post',
  url: locationCancel,
});

export const locationConfirmEndpoint = endpointMaker({
  method: 'post',
  url: locationConfirm,
});

export const locationStartEndpoint = endpointMaker({
  method: 'post',
  url: locationStart,
});
