import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Refill = ({size, color}) => (
  <Svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M9.99935 1.6665C5.39935 1.6665 1.66602 5.39984 1.66602 9.99984C1.66602 14.5998 5.39935 18.3332 9.99935 18.3332C14.5993 18.3332 18.3327 14.5998 18.3327 9.99984"
      stroke={color || '#28B446'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3333 1.6665L11.5 8.49984"
      stroke={color || '#28B446'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.834 5.1416V9.1666H14.859"
      stroke={color || '#28B446'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Refill;
