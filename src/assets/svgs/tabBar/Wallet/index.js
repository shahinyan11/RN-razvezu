import React from 'react';
import Svg, {ClipPath, Defs, G, Path, Rect} from 'react-native-svg';

const Wallet = ({size, color}) => (
  <Svg width={size || 28} height={size || 28} viewBox="0 0 28 28" fill="none">
    <G clip-path="url(#clip0_785_1970)">
      <Path
        d="M4 10.2769H27.0834"
        stroke={color || '#B3B2B8'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8.25 19.9434H10.6667"
        stroke={color || '#B3B2B8'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13.6875 19.9434H18.5208"
        stroke={color || '#B3B2B8'}
        strokeWidth="1.5"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.365 4.23486H21.7896C26.0912 4.23486 27.1667 5.2982 27.1667 9.53945V19.4599C27.1667 23.7011 26.0912 24.7644 21.8017 24.7644H9.365C5.07542 24.7765 4 23.7132 4 19.4719V9.53945C4 5.2982 5.07542 4.23486 9.365 4.23486Z"
        stroke={color || '#B3B2B8'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_785_1970">
        <Rect width="28" height="28" fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default Wallet;
