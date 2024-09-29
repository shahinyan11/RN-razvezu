import React from 'react';
import {TouchableOpacity} from 'react-native';

import {IconBack} from '@assets/svgs/action';
import {goBack} from '@navigation/RootNavigation';
import {ACTIVE_OPACITY} from '@constants/index';

const BackButton = ({color, ...prop}) => (
  <TouchableOpacity {...prop} onPress={goBack} activeOpacity={ACTIVE_OPACITY}>
    <IconBack color={color} />
  </TouchableOpacity>
);

export default BackButton;
