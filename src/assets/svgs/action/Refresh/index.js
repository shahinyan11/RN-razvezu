import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Refresh = ({size, color}) => (
  <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
    <Path
      d="M14.6673 8.00016C14.6673 11.6802 11.6807 14.6668 8.00065 14.6668C4.32065 14.6668 2.07398 10.9602 2.07398 10.9602M2.07398 10.9602H5.08732M2.07398 10.9602V14.2935M1.33398 8.00016C1.33398 4.32016 4.29398 1.3335 8.00065 1.3335C12.4473 1.3335 14.6673 5.04016 14.6673 5.04016M14.6673 5.04016V1.70683M14.6673 5.04016H11.7073"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Refresh;
