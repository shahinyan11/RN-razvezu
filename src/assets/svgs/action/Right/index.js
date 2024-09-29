import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';

const Right = ({size, color, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    activeOpacity={ACTIVE_OPACITY}>
    <Svg width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.25214 5.24121C9.58834 4.9196 10.1334 4.9196 10.4696 5.24121L16.6218 11.1265C17.1261 11.6089 17.1261 12.3911 16.6218 12.8735L10.4696 18.7588C10.1334 19.0804 9.58834 19.0804 9.25214 18.7588C8.91595 18.4372 8.91595 17.9158 9.25214 17.5941L15.1 12L9.25214 6.40585C8.91595 6.08424 8.91595 5.56281 9.25214 5.24121Z"
        fill={color || 'black'}
      />
    </Svg>
  </TouchableOpacity>
);

export default Right;
