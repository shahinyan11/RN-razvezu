import httpClient from '@httpClient';
import {locationChangeEndpoint} from '@store/routes/endpoints';

export default params => async () => {
  const {url} = locationChangeEndpoint;

  try {
    await httpClient.post(url, params);
    return true;
  } catch (e) {
    console.log('_locationChange', e);
    return false;
  }
};
