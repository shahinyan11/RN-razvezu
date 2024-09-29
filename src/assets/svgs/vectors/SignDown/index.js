import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SignDown = ({size, color}) => (
  <Svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none">
    <Path
      id="Vector 272"
      d="M10.5 4V16M10.5 16L6 11.5M10.5 16L15 11.5"
      stroke={color || 'white'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SignDown;
