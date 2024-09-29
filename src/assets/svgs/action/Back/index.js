import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Back = ({size, color}) => (
  <Svg
    width={size || '20'}
    height={size || '20'}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7479 3.24121C12.4117 2.9196 11.8666 2.9196 11.5304 3.24121L5.37821 9.12652C4.87393 9.60893 4.87393 10.3911 5.37822 10.8735L11.5304 16.7588C11.8666 17.0804 12.4117 17.0804 12.7479 16.7588C13.084 16.4372 13.084 15.9158 12.7479 15.5941L6.90004 10L12.7479 4.40585C13.084 4.08424 13.084 3.56281 12.7479 3.24121Z"
      fill={color || 'white'}
    />
  </Svg>
);

export default Back;
