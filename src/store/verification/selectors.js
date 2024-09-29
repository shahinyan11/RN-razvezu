import {createSelector} from 'reselect';

export const selectVerificationStore = store => store.verification;

export const selectPassportPhotos = createSelector(
  selectVerificationStore,
  authStore => ({...authStore.passportPhotos}),
);

export const selectDriverLicensePhotos = createSelector(
  selectVerificationStore,
  authStore => ({...authStore.driverLicensePhotos}),
);

export const selectCarDocPhotos = createSelector(
  selectVerificationStore,
  authStore => ({...authStore.carDocPhotos}),
);

export const selectCarPhotos = createSelector(
  selectVerificationStore,
  authStore => ({...authStore.carPhotos}),
);
