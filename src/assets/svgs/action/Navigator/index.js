import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Navigator = ({size, color, style}) => (
  <Svg
    style={style}
    width={size || 18}
    height={size || 18}
    viewBox="0 0 19 18"
    fill="none">
    <Path
      d="M0.5 8.19067L8.12446 10.375L10.3086 18L16.4989 2L0.5 8.19067Z"
      fill="#FFC700"
    />
    <Path
      d="M16.5004 2L10.3101 18L8.12598 10.375L16.5004 2Z"
      fill="#EF5D0D"
      fillOpacity="0.5"
    />
  </Svg>
);

export default Navigator;
