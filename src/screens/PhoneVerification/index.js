import React, {useEffect, useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {removeListener, startOtpListener} from 'react-native-otp-verify';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';

import useScreenContainer from '@hooks/useScreenContainer';
import {isIos} from '@constants/device';
import {authStartRequest, phoneConfirmRequest} from '@store/auth/operations';
import {selectAuthStore} from '@store/auth/selectors';
import KeyboardAwareView from '@components/containers/KeyboardAwareView';
import CountdownTimer from '@components/CountdownTimer';
import CodeConfirm from '@components/CodeConfirm';
import st from './styles';
import {ACTIVE_OPACITY} from '@constants/index';

const PhoneVerification = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {params} = useRoute();
  const [code, setCode] = useState('');
  const [resend, setResend] = useState(false);
  const {last_send, interval} = useSelector(selectAuthStore);
  const {containerStyle} = useScreenContainer();

  useEffect(() => {
    if (!isIos) {
      startOtpListener(message => {
        const otp = /(\d{6})/g.exec(message)?.[1];
        otp && setCode(otp);
      });

      return () => removeListener();
    }
  }, []);

  useEffect(() => {
    if (code.length === 4) {
      dispatch(phoneConfirmRequest({code, phone: params?.phone.unMasked})).then(
        () => {
          setCode('');
        },
      );
    }
  }, [params, code, dispatch]);

  useEffect(() => {
    setResend(false);
  }, [last_send]);

  const verifyPhone = () => dispatch(authStartRequest(params?.phone.unMasked));

  const time = useMemo(() => {
    return (
      moment(new Date().toISOString())
        // moment(last_send)
        .add(interval, 'seconds')
        .diff(moment()) / 1000
    );
  }, [last_send]);

  const onStartTimer = () => setResend(false);

  const onFinishTimer = () => setResend(true);

  const onPressChange = () => navigation.goBack();

  return (
    <KeyboardAwareView containerStyle={[st.screenContainer, containerStyle]}>
      <View style={st.whiteContainer}>
        <Text style={st.title}>Введите код</Text>
        <Text style={st.text}>
          {`Мы отправили код подтверждения\nна ${params?.phone.masked} `}
          <Text style={st.change}>
            <Text onPress={onPressChange}>Изменить</Text>
          </Text>
        </Text>
        <CodeConfirm
          containerStyle={st.codeConfirm}
          autoFocus={true}
          value={code}
          onChangeText={setCode}
        />
        <View style={st.bottomView}>
          {!resend ? (
            <Text style={st.bottomText}>
              {'Получить новый код можно через '}
              <CountdownTimer
                initialTime={Math.ceil(time)}
                onStart={onStartTimer}
                onFinish={onFinishTimer}
              />
            </Text>
          ) : (
            <TouchableOpacity
              onPress={verifyPhone}
              activeOpacity={ACTIVE_OPACITY}>
              <Text>Получить новый код</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </KeyboardAwareView>
  );
};

export default PhoneVerification;
