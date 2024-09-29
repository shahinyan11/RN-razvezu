import DocumentPicker from 'react-native-document-picker';
import get2gisLink from '@utils/get2gisLink';
import getYandexNavigatorLink from '@utils/getYandexNavigatorLink';
import getYandexMapsLink from '@utils/getYandexMapsLink';

// export const BASE_URL = 'https://mock-api-web-soft.vercel.app';
export const BASE_URL = 'https://api.razvezu.pro/api/v1';

export const ALLOWED_FILE_TYPES = [
  DocumentPicker.types.images,
  DocumentPicker.types.pdf,
  DocumentPicker.types.csv,
  DocumentPicker.types.doc,
  DocumentPicker.types.docx,
  DocumentPicker.types.xls,
  DocumentPicker.types.xlsx,
];

// prettier-ignore
export const MONTHS = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];

export const ACTIVE_OPACITY = 0.8;

// prettier-ignore
export const MAP_APPS = {
    'yandex': {
        name: 'Яндекс Навигатор',
        order: 1, getDeepLink: getYandexNavigatorLink,
        multiLocationSupport: true,
    },
    'yandex-maps': {
        name: 'Яндекс Карты',
        order: 2,
        getDeepLink: getYandexMapsLink,
        multiLocationSupport: true,
    },
    'dgis': {
        name: '2ГИС',
        order: 3,
        getDeepLink: get2gisLink,
        multiLocationSupport: true,
    },
    'apple-maps': {name: 'Apple maps', order: 4},
    'google-maps': {name: 'Google maps', order: 5},
};

export const CAMERA_DETECTIONS = {
  FACE: 'face',
  OBJECT: 'object',
};

export const ORDER_CANCEL_REASONS = [
  {id: 1, text: 'Не удалось связаться с клиентом'},
  {id: 2, text: 'Не удалось связаться с клиентом'},
  {id: 3, text: 'Клиент отказался от доставки'},
  {id: 4, text: 'Не удалось связаться с клиентом'},
  {id: 5, text: 'Клиент отказался от доставки'},
  {id: 6, text: 'Не удалось связаться с клиентом'},
  {id: 7, text: 'Другая причина'},
];

export const URL_TILE =
  'https://tile2.maps.2gis.com/tiles?x={x}&y={y}&z={z}&v=1&r=g&ts=online_hd';
