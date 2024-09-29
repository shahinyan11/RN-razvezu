import React, {useCallback, useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BackHandler} from 'react-native';

import {closeBottomSheet, openBottomSheet} from '@store/modal';
import SHEET_COMPONENTS from './components';
import {bottomSheetSelector} from '@store/modal/selectors';

export default function BottomSheetRoot() {
  const dispatch = useDispatch();
  const sheetRef = useRef();
  const {type, data} = useSelector(bottomSheetSelector);
  const sheetsStack = useRef(new Set([])).current;
  const Component = SHEET_COMPONENTS[type];

  // This is necessary to avoid duplicating the same object in the `sheetsStack`.
  const dataString = JSON.stringify({type, data});

  useEffect(() => {
    sheetsStack.add(dataString);
  }, [type, data]);

  const onBackPress = useCallback(() => {
    sheetsStack.delete(dataString);

    if (sheetsStack.size > 0) {
      const prevSheet = [...sheetsStack].pop();
      dispatch(openBottomSheet(JSON.parse(prevSheet)));
    } else {
      dispatch(closeBottomSheet());
    }

    return true;
  }, [type, data]);

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [onBackPress]);

  return <Component sheetRef={sheetRef} {...data} />;
}
