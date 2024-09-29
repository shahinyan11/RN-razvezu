import httpClient from '@httpClient';
import {DEPOTS_REQUEST_ACCESS} from '@constants/apiRoutes';
import {setDepots} from '@store/depots';

export default depot_id => async (dispatch, getState) => {
  try {
    const {data} = await httpClient.post(DEPOTS_REQUEST_ACCESS, {depot_id});

    const {depots} = getState().depots;
    const newDepots = depots.map(item =>
      item.depot_id === depot_id ? data.result : item,
    );

    dispatch(setDepots(newDepots));
  } catch (e) {
    console.log('depotAccessRequestLogic', e.message);
  }
};
