import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';

const Link = ({size, color, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    activeOpacity={ACTIVE_OPACITY}>
    <Svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none">
      <Path
        d="M10.8833 9.1167C12.7583 10.9917 12.7583 14.025 10.8833 15.8917C9.00833 17.7584 5.97499 17.7667 4.10833 15.8917C2.24166 14.0167 2.23333 10.9834 4.10833 9.1167"
        stroke={color || '#292D32'}
        stroke-width="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.82505 11.1749C6.87505 9.2249 6.87505 6.05824 8.82505 4.0999C10.775 2.14157 13.9417 2.1499 15.9 4.0999C17.8584 6.0499 17.85 9.21657 15.9 11.1749"
        stroke={color || '#292D32'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  </TouchableOpacity>
);

export default Link;
