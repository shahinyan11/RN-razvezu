import endpointMaker from '@helpers/endpointMaker';
import * as urls from '@constants/apiRoutes';

export const sendToVerifyRequestEndpoint = () =>
  endpointMaker({method: 'post', url: urls.PROFILE_VERIFY_DOC});
