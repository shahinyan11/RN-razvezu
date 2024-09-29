import React from 'react';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';
import Loader from '@components/Loader';

const ButtonContainer = ({children, isLoading, ...props}) => {
  return (
    <TouchableOpacity activeOpacity={ACTIVE_OPACITY} {...props}>
      {isLoading ? <Loader /> : children}
    </TouchableOpacity>
  );
};
export default ButtonContainer;
