import React from 'react';
import {useSelector} from 'react-redux';
import RNModal from 'react-native-modal';

import {MAIN_COLORS} from '@constants/styles/colors';
import {selectGlobalLoader} from '@store/loader/selectors';
import Loader from '@components/Loader';

export default function FullScreenLoader() {
  const globalLoader = useSelector(selectGlobalLoader);

  return (
    <RNModal
      style={{margin: 0}}
      isVisible={globalLoader}
      backdropOpacity={1}
      animationIn="slideInRight"
      backdropColor={MAIN_COLORS.WHITE}>
      <Loader />
    </RNModal>
  );
}
