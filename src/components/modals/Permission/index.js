import {AppState, Linking, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import RNModal from 'react-native-modal';
import {
  checkMultiple,
  PERMISSIONS,
  request,
  RESULTS,
} from 'react-native-permissions';

import Button from '@components/buttons/Button';
import st from './styles';

const VALID_VALUES = [RESULTS.GRANTED, RESULTS.UNAVAILABLE];

const Permission = () => {
  const [visible, setVisible] = useState(false);
  const [permissions, setPermissions] = useState();
  const {
    ACCESS_FINE_LOCATION,
    ACTIVITY_RECOGNITION,
    ACCESS_BACKGROUND_LOCATION,
  } = PERMISSIONS.ANDROID;

  useEffect(() => {
    checkPermissions();
  }, []);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (nextAppState === 'active') {
        checkPermissions();
      }
    });

    return () => subscription.remove();
  }, []);

  const checkPermissions = () => {
    checkMultiple([
      ACCESS_FINE_LOCATION,
      ACTIVITY_RECOGNITION,
      ACCESS_BACKGROUND_LOCATION,
    ]).then(res => {
      setPermissions(res);
      changeVisibility(Object.values(res));
    });
  };

  const handlePress = async () => {
    const res = {};

    res[ACCESS_FINE_LOCATION] = await request(ACCESS_FINE_LOCATION);
    res[ACTIVITY_RECOGNITION] = await request(ACTIVITY_RECOGNITION);
    res[ACCESS_BACKGROUND_LOCATION] = await request(ACCESS_BACKGROUND_LOCATION);

    setPermissions(res);

    const valuesArr = Object.values(res);

    if (valuesArr.includes(RESULTS.BLOCKED)) {
      Linking.openSettings();
    }

    changeVisibility(valuesArr);
  };

  const changeVisibility = values => {
    const isAllGranted = !values.find(val => !VALID_VALUES.includes(val));
    setVisible(!isAllGranted);
  };

  return (
    <RNModal style={{margin: 0}} isVisible={visible} useNativeDriver={true}>
      <View style={st.container}>
        <Text style={st.title}>Доступ к функциям</Text>
        <View style={st.section}>
          <Text style={st.text}>
            Сейчас мы запросим доступ к функциям, без которых не получится
            выполнять задания
          </Text>
        </View>
        {!VALID_VALUES.includes(permissions?.[ACCESS_FINE_LOCATION]) && (
          <View style={st.section}>
            <Text style={st.text}>Местоположение</Text>
            <Text style={st.textLight}>
              Для фоновой навигации и поиска заказов
            </Text>
          </View>
        )}

        {!VALID_VALUES.includes(permissions?.[ACTIVITY_RECOGNITION]) && (
          <View style={st.section}>
            <Text style={st.text}>Физическая активность</Text>
            <Text style={st.textLight}>
              Необходимо, чтобы лучше классифицировать передвижение в
              автомобиле. Это сделано для того, чтобы сэкономить заряд батареи
              телефона.
            </Text>
          </View>
        )}

        {!VALID_VALUES.includes(permissions?.[ACCESS_BACKGROUND_LOCATION]) && (
          <View style={st.section}>
            <Text style={st.text}>Местоположение фоновом режиме</Text>
            <Text style={st.textLight}>
              Это приложение собирает данные о местоположении, чтобы отслеживать
              ваш машрут, даже если приложение закрыто.
            </Text>
          </View>
        )}

        <Button
          text="Продолжить"
          containerStyle={st.button}
          onPress={handlePress}
        />
      </View>
    </RNModal>
  );
};

export default Permission;
