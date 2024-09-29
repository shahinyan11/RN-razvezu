import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const SignDown = ({size, color, ...props}) => (
  <Svg
    {...props}
    width={size || 24}
    height={size || 24}
    viewBox="0 0 24 24"
    fill="none">
    <G id="vuesax/linear/arrow-down">
      <G id="arrow-down">
        <Path
          id="Vector"
          d="M19.9201 8.94995L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.94995"
          stroke={color || '#000000'}
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </G>
  </Svg>
);

export default SignDown;
