import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';

const Send = ({size, color, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    activeOpacity={ACTIVE_OPACITY}>
    <Svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M7.92498 3.52487L15.0583 7.09153C18.2583 8.69153 18.2583 11.3082 15.0583 12.9082L7.92498 16.4749C3.12498 18.8749 1.16664 16.9082 3.56664 12.1165L4.29164 10.6749C4.47498 10.3082 4.47498 9.69987 4.29164 9.3332L3.56664 7.8832C1.16664 3.09153 3.13331 1.12487 7.92498 3.52487Z"
        stroke={color || 'black'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.53333 10H9.03333"
        stroke={color || 'black'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </TouchableOpacity>
);

export default Send;
