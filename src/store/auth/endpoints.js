import endpointMaker from '@helpers/endpointMaker';
import {authLogout} from '@constants/apiRoutes';

export const logoutEndpoint = endpointMaker({
  method: 'post',
  url: authLogout,
});
