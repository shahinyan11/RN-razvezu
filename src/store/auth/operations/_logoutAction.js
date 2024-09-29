import {GoogleSignin} from '@react-native-google-signin/google-signin';
import messaging from '@react-native-firebase/messaging';
import {navigationRef} from '@navigation/RootNavigation';
import {resetAuth} from '@store/auth';
import {resetUser} from '@store/user';
import {removeLoader, setLoader} from '@store/loader';
import {logoutEndpoint} from '@store/auth/endpoints';
import httpClient from '@httpClient';

export default () => async dispatch => {
  const {endpoint, url} = logoutEndpoint;
  dispatch(setLoader(endpoint));

  try {
    await httpClient.post(url);
    dispatch(resetAuth());
    dispatch(resetUser());

    navigationRef.current?.resetRoot({
      index: 0,
      routes: [{name: 'AuthStack'}],
    });

    const isSignIn = await GoogleSignin.isSignedIn();

    if (isSignIn) {
      await GoogleSignin.signOut();
    }

    await messaging().deleteToken();
  } catch (e) {
    console.log('_logoutAction', e);
  } finally {
    dispatch(removeLoader(endpoint));
  }
};
