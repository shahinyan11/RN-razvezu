import {
  imgCharBack,
  imgCharFront,
  imgCharLeft,
  imgCharRight,
  imgDriverLicense1,
  imgDriverLicense2,
  imgPassport1,
  imgPassport2,
  imgPassport3,
  imgVehicleDoc1,
  imgVehicleDoc2,
} from '@assets/images';

import {
  carMask,
  driverLicenseBackMask,
  driverLicenseFrontMask,
  passportBackMask,
  passportFrontMask,
  regiCertBackMask,
  regiCertFrontMask,
  selfieMask,
} from '@assets/images/masks';
import {CAMERA_DETECTIONS} from '@constants/index';

export const PASSPORT_FLOW = {
  1: {
    image: imgPassport1,
    mask: passportFrontMask,
    validLabels: [{confidence: 0.5, label: 'face'}],
    title: 'Фото паспорта',
    text: 'Должно быть четко видно: фото, номер паспорта, ФИО и другие данные',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
  2: {
    image: imgPassport2,
    mask: passportBackMask,
    validLabels: [{confidence: 0.5, label: 'face'}],
    title: 'Паспорт с пропиской',
    text: 'Должно быть четко видно: фото паспорта и информацию о прописке',
    // TODO detectionType: CAMERA_DETECTIONS.OBJECT, проблемы с плагином распознавания лиц
  },
  3: {
    image: imgPassport3,
    mask: selfieMask,
    title: 'Селфи',
    validLabels: [{confidence: 0.5, label: 'face'}],
    text: 'Должно быть четко видно: лицо',
    isFront: true,
    // detectionType: CAMERA_DETECTIONS.FACE,
  },
};

export const PASSPORT_PHOTO_NAMES = {
  1: 'Паспорт',
  2: 'Прописка',
  3: 'Селфи',
};

export const DRIVER_LICENSE_FLOW = {
  1: {
    image: imgDriverLicense1,
    mask: driverLicenseFrontMask,
    validLabels: [{confidence: 0.5, label: 'driverLicense'}],
    title: 'В.У. лицевая сторона',
    text: 'Должно быть четко видно: номер, фото, ФИО, дату выдачи и действия документа',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
  2: {
    image: imgDriverLicense2,
    mask: driverLicenseBackMask,
    validLabels: [{confidence: 0.5, label: 'driverLicense'}],
    title: 'В.У. обратная сторона',
    text: 'Должно быть четко видно: номер В. У. и категорию прав',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
};

export const DRIVER_LICENSE_NAMES = {
  1: 'Лицевая сторона',
  2: 'Обратная сторона',
};

export const CAR_DOC_FLOW = {
  1: {
    image: imgVehicleDoc1,
    mask: regiCertFrontMask,
    validLabels: [{confidence: 0.5, label: 'regCertificate'}],
    title: 'Св-во регистрации ТС лицевая сторона',
    text: 'Должно быть четко видно: регистрационный номер, паспорт ТС, марка авто, год выпуска',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
  2: {
    image: imgVehicleDoc2,
    mask: regiCertBackMask,
    validLabels: [{confidence: 0.5, label: 'regCertificate'}],
    title: 'Св-во регистрации ТС обратная сторона',
    text: 'Должно быть четко видно: регистрационный номер, паспорт ТС, марка авто, год выпуска',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
};

export const CAR_DOC_NAMES = {
  1: 'Лицевая сторона',
  2: 'Обратная сторона',
};

export const CAR_FLOW = {
  1: {
    image: imgCharFront,
    mask: carMask,
    validLabels: [{confidence: 0.5, label: 'car'}],
    title: 'Фотографии авто',
    text: 'Необходимо сделать фото авто с четырех сторон: спереди, сзади, слева и справа ',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
  2: {
    image: imgCharLeft,
    mask: carMask,
    validLabels: [{confidence: 0.5, label: 'car'}],
    title: 'Фотографии авто',
    text: 'Необходимо сделать фото авто с четырех сторон: спереди, сзади, слева и справа ',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
  3: {
    image: imgCharRight,
    mask: carMask,
    validLabels: [{confidence: 0.5, label: 'car'}],
    title: 'Фотографии авто',
    text: 'Необходимо сделать фото авто с четырех сторон: спереди, сзади, слева и справа ',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
  4: {
    image: imgCharBack,
    mask: carMask,
    validLabels: [{confidence: 0.5, label: 'car'}],
    title: 'Фотографии авто',
    text: 'Необходимо сделать фото авто с четырех сторон: спереди, сзади, слева и справа ',
    // detectionType: CAMERA_DETECTIONS.OBJECT,
  },
};

export const CAR_NAMES = {
  1: 'Спереди',
  2: 'Справа',
  3: 'Слева',
  4: 'Сзади',
};
