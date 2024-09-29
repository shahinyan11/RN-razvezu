import React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {TouchableOpacity} from 'react-native';
import {ACTIVE_OPACITY} from '@constants/index';

const DirectUp = ({size, color, onPress, style}) => (
  <TouchableOpacity
    onPress={onPress}
    style={style}
    activeOpacity={ACTIVE_OPACITY}>
    <Svg width={size || 17} height={size || 17} viewBox="0 0 17 17" fill="none">
      <G id="vuesax/linear/direct-up">
        <Path
          id="Vector"
          d="M10.3246 1.64325L2.24401 7.51683C0.324894 8.90959 1.32168 11.9431 3.69232 11.9291L6.45523 11.9129C7.2227 11.9084 7.94796 12.2658 8.41204 12.877L10.0828 15.0776C11.5163 16.9658 14.5221 15.9044 14.4638 13.5374L14.1972 3.55123C14.1447 1.58673 11.9142 0.487791 10.3246 1.64325Z"
          stroke={color || '#292D32'}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
    </Svg>
  </TouchableOpacity>
);

export default DirectUp;
