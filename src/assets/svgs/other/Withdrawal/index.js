import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Withdrawal = ({size, color}) => (
  <Svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none">
    <Path
      d="M9.99935 1.6665C5.39935 1.6665 1.66602 5.39984 1.66602 9.99984C1.66602 14.5998 5.39935 18.3332 9.99935 18.3332C14.5993 18.3332 18.3327 14.5998 18.3327 9.99984"
      stroke={color || '#E88410'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.834 9.16683L17.6673 2.3335"
      stroke={color || '#E88410'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M18.3336 5.6915V1.6665H14.3086"
      stroke={color || '#E88410'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Withdrawal;
