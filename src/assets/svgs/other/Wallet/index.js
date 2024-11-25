import React from 'react';
import Svg, {Path} from 'react-native-svg';

const SignDown = ({size, color}) => (
  <Svg width={size || 20} height={size || 20} viewBox="0 0 20 20" fill="none">
    <Path
      id="Vector"
      d="M10.834 9.2915H5.83398"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Vector_2"
      d="M1.66602 9.2917V5.4417C1.66602 3.7417 3.04102 2.3667 4.74102 2.3667H9.42435C11.1243 2.3667 12.4993 3.42503 12.4993 5.12503"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Vector_3"
      d="M14.566 10.1667C14.1493 10.5667 13.9494 11.1833 14.116 11.8166C14.3244 12.5916 15.091 13.0833 15.891 13.0833H16.666V14.2917C16.666 16.1333 15.1743 17.625 13.3327 17.625H4.99935C3.15768 17.625 1.66602 16.1333 1.66602 14.2917V8.45833C1.66602 6.61667 3.15768 5.125 4.99935 5.125H13.3327C15.166 5.125 16.666 6.625 16.666 8.45833V9.66663H15.766C15.2993 9.66663 14.8743 9.84999 14.566 10.1667Z"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Vector_4"
      d="M18.3329 10.5165V12.2332C18.3329 12.6999 17.9495 13.0832 17.4745 13.0832H15.8662C14.9662 13.0832 14.1412 12.4249 14.0662 11.5249C14.0162 10.9999 14.2162 10.5082 14.5662 10.1665C14.8745 9.84987 15.2995 9.6665 15.7662 9.6665H17.4745C17.9495 9.6665 18.3329 10.0499 18.3329 10.5165Z"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SignDown;
