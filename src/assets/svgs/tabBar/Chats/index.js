import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Chats = ({size, color}) => (
  <Svg width={size || 28} height={size || 28} viewBox="0 0 28 28" fill="none">
    <Path
      d="M19.175 3.89307H10.075C6.025 3.89307 4 6.01449 4 10.2574V24.0466C4 24.63 4.45562 25.1074 5.0125 25.1074H19.175C23.225 25.1074 25.25 22.9859 25.25 18.7431V10.2574C25.25 6.01449 23.225 3.89307 19.175 3.89307Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10.5 14.5H18.375"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Chats;
