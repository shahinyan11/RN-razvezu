import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';

const ZoomOut = ({size, color, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    activeOpacity={ACTIVE_OPACITY}>
    <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
      <G id="Icon 21">
        <Path
          id="Vector"
          d="M2 8H8H14"
          stroke={color || 'black'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </G>
    </Svg>
  </TouchableOpacity>
);

export default ZoomOut;
