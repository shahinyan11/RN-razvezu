import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Plus = ({size, color}) => (
  <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M1 8H15M8 1L8 15"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.7"
      strokeLinecap="round"
    />
  </Svg>
);

export default Plus;
