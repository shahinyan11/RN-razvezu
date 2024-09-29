import httpClient from '@httpClient';
import {BOOKING_SLOTS} from '@constants/apiRoutes';
import {setSlotGroups} from '@store/slots';

export default params => async (dispatch, getState) => {
  try {
    const {data} = await httpClient.post(BOOKING_SLOTS, params);

    const {slotGroups} = getState().slots;

    // Finding a slot by "date" and update its "status" and "slots_id"
    const newGroups = slotGroups.map(item => {
      if (item.date === params.date) {
        item.slots = item.slots.map(slot => {
          if (
            slot.interval.time_interval_start === params.time_interval_start &&
            slot.interval.time_interval_finish === params.time_interval_finish
          ) {
            slot.status = data.result.status;
            slot.slots_id = data.result.slot_id;
          }

          return slot;
        });
      }

      return item;
    });

    dispatch(setSlotGroups([...newGroups]));
  } catch (e) {
    console.log('_bookingSlotsRequest', e.message);
  }
};
