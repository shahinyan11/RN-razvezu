import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Card = ({size, color, style}) => (
  <Svg
    style={style}
    width={size || 20}
    height={size || 20}
    viewBox="0 0 20 20"
    fill="none">
    <Path
      id="Vector"
      d="M1.66602 7.0874H18.3327"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Vector_2"
      d="M5 13.7539H6.66667"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Vector_3"
      d="M8.75 13.7539H12.0833"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      id="Vector_4"
      d="M5.36602 2.9209H14.6243C17.591 2.9209 18.3327 3.65423 18.3327 6.57923V13.4209C18.3327 16.3459 17.591 17.0792 14.6327 17.0792H5.36602C2.40768 17.0876 1.66602 16.3542 1.66602 13.4292V6.57923C1.66602 3.65423 2.40768 2.9209 5.36602 2.9209Z"
      stroke={color || 'white'}
      strokeWidth="1.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Card;
