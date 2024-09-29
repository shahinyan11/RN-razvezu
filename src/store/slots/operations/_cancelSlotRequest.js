import httpClient from '@httpClient';
import {SLOTS} from '@constants/apiRoutes';
import {setSlotGroups} from '@store/slots';
import {SLOT_STATUS} from '@constants/status';

export default ({date, id}) =>
  async (dispatch, getState) => {
    try {
      await httpClient.delete(`${SLOTS}/${id}`);

      const {slotGroups} = getState().slots;

      // Finding a slot by "date" and update its "status" and "slots_id"
      const newGroups = slotGroups.map(item => {
        if (item.date === date) {
          item.slots = item.slots.map(slot => {
            if (slot.slots_id === id) {
              slot.status = SLOT_STATUS.NO_REQUESTS;
              slot.slots_id = null;
            }

            return slot;
          });
        }

        return item;
      });

      dispatch(setSlotGroups([...newGroups]));
    } catch (e) {
      console.log('_getSlotsRequest', e.message);
    }
  };
