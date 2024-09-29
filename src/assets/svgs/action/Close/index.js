import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

const Close = ({size, color}) => (
  <Svg width={size || 16} height={size || 16} viewBox="0 0 16 16" fill="none">
    <G id="Close_Icons_UIA">
      <Path
        id="Path 11760"
        d="M1 1L15.2418 15.0418"
        stroke={color || '#51526C'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        id="Path 11761"
        d="M15.2417 1L0.999904 15.0418"
        stroke={color || '#51526C'}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
  </Svg>
);

export default Close;
