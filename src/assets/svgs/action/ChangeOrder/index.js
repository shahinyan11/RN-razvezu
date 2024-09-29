import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ChangeOrder = ({size, color, style}) => (
  <Svg
    style={style}
    width={size || 16}
    height={size || 16}
    viewBox="0 0 16 16"
    fill="none">
    <Path
      d="M3 3.89473H11.3019C12.2968 3.89473 13.1053 4.70228 13.1053 5.69624V7.6842"
      stroke="white"
      stroke-width="1.2"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <Path
      d="M4.89474 2L3 3.89474L4.89474 5.78947"
      stroke="white"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.1053 12.1053H4.80341C3.80843 12.1053 3 11.2976 3 10.3037V8.31578"
      stroke="white"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M11.2105 14L13.1053 12.1053L11.2105 10.2105"
      stroke="white"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChangeOrder;
