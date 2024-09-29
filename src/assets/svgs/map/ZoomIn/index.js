import React from 'react';
import Svg, {Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';

const ZoomIn = ({size, color, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    activeOpacity={ACTIVE_OPACITY}>
    <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
      <Path
        d="M3 7.25C2.58579 7.25 2.25 7.58579 2.25 8C2.25 8.41421 2.58579 8.75 3 8.75V7.25ZM13 8.75C13.4142 8.75 13.75 8.41421 13.75 8C13.75 7.58579 13.4142 7.25 13 7.25V8.75ZM7.25 13C7.25 13.4142 7.58579 13.75 8 13.75C8.41421 13.75 8.75 13.4142 8.75 13H7.25ZM8.75 3C8.75 2.58579 8.41421 2.25 8 2.25C7.58579 2.25 7.25 2.58579 7.25 3H8.75ZM8.75 13V3H7.25V13H8.75ZM3 8.75H8V7.25H3V8.75ZM8 8.75H13V7.25H8V8.75Z"
        fill={color || 'black'}
      />
    </Svg>
  </TouchableOpacity>
);

export default ZoomIn;
