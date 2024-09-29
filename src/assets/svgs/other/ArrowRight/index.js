import React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowRight = ({size, color, style}) => (
  <Svg
    style={style}
    width={size || 20}
    height={size || 20}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      fillRule="evenodd"
      clipEule="evenodd"
      d="M7.25214 16.7588C7.58834 17.0804 8.13341 17.0804 8.4696 16.7588L14.6218 10.8735C15.1261 10.3911 15.1261 9.60893 14.6218 9.12651L8.4696 3.24121C8.13341 2.9196 7.58834 2.9196 7.25214 3.24121C6.91595 3.56281 6.91595 4.08424 7.25214 4.40585L13.1 10L7.25214 15.5941C6.91595 15.9158 6.91595 16.4372 7.25214 16.7588Z"
      fill={color || 'black'}
    />
  </Svg>
);

export default ArrowRight;
