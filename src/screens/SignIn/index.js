import React, {useEffect, useRef, useState} from 'react';
import {
  findNodeHandle,
  Image,
  Keyboard,
  Linking,
  Text,
  View,
} from 'react-native';
import {FormikProvider, useFormik} from 'formik';
import {useDispatch, useSelector} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import validationSignIn from '@validations/signInValidation';
import PhoneField from '@components/form/PhoneField';
import Button from '@components/buttons/Button';
import st from './styles';
import useScreenContainer from '@hooks/useScreenContainer';
import {imgDelivery} from '@assets/images';
import {APP_VERSION, BUILD_NUMBER} from '@constants/app';
import {isIos} from '@constants/device';
import {getHash} from 'react-native-otp-verify';
import store from '@store';
import {setSmsHash} from '@store/app';
import {authStartRequest, socialAuthRequest} from '@store/auth/operations';
import {selectUserStore} from '@store/user/selectors';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {IconApple, IconGoogle} from '@assets/svgs/socials';
import appleAuth from '@invertase/react-native-apple-authentication';

GoogleSignin.configure({
  webClientId:
    '175866809092-1a0q60rajkboj1cq3l5hcp5uq015rc8i.apps.googleusercontent.com',
});

const SignIn = () => {
  const dispatch = useDispatch();
  const scrollRef = useRef(null);
  const [keyboardStatus, setKeyboardStatus] = useState('');
  const {containerStyle} = useScreenContainer();
  const {user} = useSelector(selectUserStore);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardStatus(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardStatus(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, [keyboardStatus]);

  useEffect(() => {
    if (!isIos) {
      getHash().then(hash => {
        store.dispatch(setSmsHash(hash?.[0]));
      });
    }
  }, []);

  const onSubmit = (values, formik) => {
    dispatch(authStartRequest({params: values, formik}));
  };

  const formik = useFormik({
    onSubmit,
    validationSchema: validationSignIn,
    validateOnMount: true,
    enableReinitialize: true,
    initialValues: {
      phone: {
        unMasked: '+7',
        masked: '',
      },
    },
  });

  const onFocus = target => {
    const reactNode = findNodeHandle(target);
    scrollRef.current.scrollToFocusedInput(reactNode);
  };

  const onGoogleSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn();

      const {accessToken} = await GoogleSignin.getTokens();

      dispatch(socialAuthRequest({provider: 'google', token: accessToken}));
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Google signIn error => SIGN_IN_CANCELLED');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Google signIn error => IN_PROGRESS');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google signIn error => PLAY_SERVICES_NOT_AVAILABLE');
      } else {
        console.log('Google signIn error code => ' + error.code);
      }
    }
  };

  async function onAppleSignIn() {
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL],
    });

    const credentialState = await appleAuth.getCredentialStateForUser(
      appleAuthRequestResponse.user,
    );

    if (credentialState === appleAuth.State.AUTHORIZED) {
      dispatch(
        socialAuthRequest({
          provider: 'apple',
          token: appleAuthRequestResponse.identityToken,
        }),
      );
    }
  }

  return (
    <View style={containerStyle}>
      <View style={st.screenContainer}>
        <View style={st.whiteContainer}>
          <KeyboardAwareScrollView
            ref={scrollRef}
            extraHeight={220}
            contentContainerStyle={[
              st.keyboardContainer,
              keyboardStatus && st.activeKeyboard,
            ]}
            keyboardShouldPersistTaps={'handled'}>
            <FormikProvider value={formik}>
              <Text style={st.title}>{'Вход \nили регистрация'}</Text>
              <Text style={st.text}>
                Введите номер телефона, мы отправим на него код подтверждения
              </Text>
              <PhoneField
                name="phone"
                placeholder={'Введите номер телефона'}
                containerStyle={st.inputContainer}
                onFocus={onFocus}
              />
              <Button
                text={'Получить код'}
                onPress={formik.handleSubmit}
                disabled={!formik.isValid}
                containerStyle={st.buttonContainer}
              />
              {!keyboardStatus && (
                <Text style={st.bottomText}>
                  Нажимая получить, вы соглашаетесь с{' '}
                  <Text
                    style={st.underline}
                    onPress={() => Linking.openURL(user.url_rules)}>
                    договором оферты
                  </Text>{' '}
                  и принимаете{' '}
                  <Text
                    style={st.underline}
                    onPress={() => Linking.openURL(user.url_policy)}>
                    условия пользовательского соглашения
                  </Text>
                </Text>
              )}
            </FormikProvider>
            <View style={st.buttonsRow}>
              <Button
                containerStyle={st.socialButton}
                textStyle={st.ml4}
                theme="transparent"
                text="Войти Apple"
                onPress={onAppleSignIn}
                addBefore={<IconApple />}
              />
              <Button
                containerStyle={st.socialButton}
                textStyle={st.ml4}
                theme="transparent"
                text="Войти Google"
                onPress={onGoogleSignIn}
                addBefore={<IconGoogle />}
              />
            </View>
          </KeyboardAwareScrollView>

          {!keyboardStatus && (
            <Text
              style={st.appVersion}>{`${APP_VERSION} (${BUILD_NUMBER})`}</Text>
          )}
        </View>

        <Image
          source={imgDelivery}
          style={[st.img, keyboardStatus && st.small]}
        />
      </View>
    </View>
  );
};

export default SignIn;
