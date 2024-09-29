import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PersistGate} from 'redux-persist/integration/react';
import FullScreenLoader from '@components/FullScreenLoader';
import MyStatusBar from '@components/MyStatusBar';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import codePush from 'react-native-code-push';
import store, {persistor} from '@store';
import ToastMessage from '@components/ToastMessage';
import Main from './Main';

// enableLatestRenderer();

if (__DEV__) {
  import('../ReactotronConfig');
}

const App = ({isHeadless}) => {
  // useEffect(() => {
  //   codePush.restartApp(true);
  // }, []);
  
  if (isHeadless) {
    return null; // App has been launched in the background by iOS, ignore
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <MyStatusBar />
            <Main />
            <FullScreenLoader />
            <ToastMessage />
          </PersistGate>
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

let codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};
const HeadlessCheckContainer = codePush(codePushOptions)(App);

export default HeadlessCheckContainer;
