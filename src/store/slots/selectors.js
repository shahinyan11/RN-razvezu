import {createSelector} from 'reselect';

export const selectSlotsStore = store => store.slots;

export const selectSlotGroups = createSelector(
  selectSlotsStore,
  store => store.slotGroups,
);

export const selectSlotsByDate = createSelector(
  [selectSlotGroups, (_, date) => date],
  (items, date) => items.find(item => item.date === date).slots,
);
