/*
export const TRANSACTIONS_STATUS = {
  PROCESS: 0,
  COMPLETE: 1,
  CANCEL: 2,
};
*/

export const TRANSACTIONS_STATUS = {
  1: 'В обработке ',
  2: 'Отменена ',
  3: 'Выполнена ',
};

export const SLOT_STATUS = {
  READY_WORK: 'ready_work',
  NO_REQUESTS: 'no_requests',
};

export const DEPOT_STATUSES = {
  NO_REQUEST: 0,
  PENDING: 1,
  CONFIRMED: 2,
};

export const ROUTE_STATUSES = {
  NEW: 'new',
  PROGRESS: 'progress',
  FINISHED: 'finished',
};

export const LOCATION_STATUSES = {
  NEW: null,
  CANCELED: 'cancelled',
  FINISHED: 'finished',
  PICKED_UP: 'picked_up',
  SHIPPED: 'shipped',
};
