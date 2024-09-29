import endpointMaker from '@helpers/endpointMaker';
import {faq} from '@constants/apiRoutes';

export const getFaqEndpoint = endpointMaker({
  method: 'get',
  url: faq,
});
