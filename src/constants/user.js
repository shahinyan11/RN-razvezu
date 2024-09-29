import {navigate} from '@navigation/RootNavigation';
import {imgRequestSent, requestApproved, requestRejected} from '@assets/images';

export const USER_STATUS = {
  UNAUTHORIZED: 1,
  TEXT_DOCS_FILLING: 2,
  TEXT_DOCS_IN_VERIFICATION: 3,
  TEXT_DOCS_REJECTED: 4,
  TEXT_DOCS_PASSED: 5,
  PHOTO_DOCS_IN_VERIFICATION: 6,
  PHOTO_DOCS_REJECTED: 7,
  PHOTO_DOCS_PASSED: 8,
  COURIER_UNVERIFIED: 9,
  COURIER_IN_VERIFICATION: 10,
  COURIER: 11,
};

// Data for the Information screen related user status
export const DATA_BY_STATUS = {
  [USER_STATUS.TEXT_DOCS_IN_VERIFICATION]: {
    image: imgRequestSent,
    title: 'Ваша заявка отправлена',
    text: 'Ваши данные отправлены на проверку, после рассмотрения вам придет push-уведомление с результатом, а пока вы можете ознакомиться с тарифами',
    firstButton: {
      text: 'Посмотреть тарифы',
      onPress: () => navigate('CityTariff'),
    },
  },

  [USER_STATUS.TEXT_DOCS_REJECTED]: {
    image: requestRejected,
    title: 'Ваша заявка рассмотрена',
    text: 'Мы внимательно ознакомились с вашей заявкой, к сожалению, в данный момент мы не можем выстроить с вами сотрудничество',
    firstButton: {
      text: 'Понятно',
      onPress: () => navigate('UserInformation'),
    },
  },

  [USER_STATUS.TEXT_DOCS_PASSED]: {
    image: requestApproved,
    title: 'Ваша заявка рассмотрена',
    text: 'Прежде, чем вы сможете пользоваться нашим мобильным приложением вам необходимо пройти верификацию',
    firstButton: {
      text: 'Начать',
      onPress: () => navigate('VerificationStack'),
    },
    secondButton: {
      text: 'Служба поддержки',
      onPress: () => {
        navigate('ChatStack', {screen: 'Conversation', params: {chat_id: 1}});
      },
    },
  },

  [USER_STATUS.PHOTO_DOCS_IN_VERIFICATION]: {
    image: imgRequestSent,
    title: 'Ваша заявка отправлена',
    text: 'Ваши данные отправлены на проверку, после рассмотрения вам придет push-уведомление с результатом, а пока вы можете ознакомиться с тарифами',
    firstButton: {
      text: 'Служба поддержки',
      onPress: () => navigate('ChatStack'),
    },
  },

  [USER_STATUS.PHOTO_DOCS_REJECTED]: {
    image: requestRejected,
    title: 'Ваша заявка рассмотрена',
    text: 'Мы внимательно ознакомились с вашей заявкой, вам необходимо связать с службой поддержки',
    firstButton: {
      text: 'Служба поддержки',
      onPress: () => navigate('ChatStack'),
    },
  },

  [USER_STATUS.PHOTO_DOCS_PASSED]: {
    image: requestRejected,
    title: 'Верификация пройдена',
    text: 'Поздравляем, Вы можете приступить к работе',
    firstButton: {
      text: 'Начать',
      onPress: () => navigate('DepotsStack'),
    },
  },
};
