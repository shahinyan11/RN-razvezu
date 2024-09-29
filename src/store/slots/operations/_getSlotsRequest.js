import httpClient from '@httpClient';
import {SLOTS} from '@constants/apiRoutes';
import {setSlotGroups} from '@store/slots';

export default () => async dispatch => {
  try {
    const {data} = await httpClient.get(SLOTS);

    dispatch(setSlotGroups(data.result));
  } catch (e) {
    console.log('_getSlotsRequest', e.message);
  }
};
