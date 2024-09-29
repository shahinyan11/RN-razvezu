import endpointMaker from '@helpers/endpointMaker';
import {
  individual,
  profileInvite,
  profileRemove,
  stories,
  storiesSeen,
} from '@constants/apiRoutes';

export const profileRemoveEndpoint = endpointMaker({
  method: 'delete',
  url: profileRemove,
});

export const getStoriesEndpoint = endpointMaker({
  method: 'get',
  url: stories,
});
export const storySeenEndpoint = endpointMaker({
  method: 'post',
  url: storiesSeen,
});

export const inviteFriendEndpoint = endpointMaker({
  method: 'post',
  url: profileInvite,
});

export const verifyIEEndpoint = endpointMaker({
  method: 'post',
  url: individual,
});
