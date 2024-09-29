import React, {useEffect, useMemo, useState} from 'react';
import {navigationRef} from '@navigation/RootNavigation';
import {StatusBar} from 'react-native';
import {MAIN_COLORS} from '@constants/styles/colors';

const MyStatusBar = () => {
  const [color, setColor] = useState(undefined);

  useEffect(() => {
    const unsubscribe = navigationRef.current?.addListener('state', () => {
      const screenOptions = navigationRef.current.getCurrentOptions();
      const {contentStyle} = screenOptions || {};

      setColor(contentStyle?.backgroundColor);
    });

    return unsubscribe;
  }, []);

  const theme = useMemo(
    () => (color === MAIN_COLORS.WHITE ? 'dark-content' : 'light-content'),
    [color],
  );

  return (
    <StatusBar
      barStyle={theme}
      translucent={true}
      backgroundColor={'transparent'}
    />
  );
};
export default MyStatusBar;
