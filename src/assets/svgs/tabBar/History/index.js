import React from 'react';
import Svg, {Path} from 'react-native-svg';

const History = ({size, color}) => (
  <Svg width={size || 28} height={size || 28} viewBox="0 0 28 28" fill="none">
    <Path
      d="M18 4V14.8333C18 16.025 16.9615 17 15.6923 17H3V8.33333C3 5.93917 5.06538 4 7.61538 4H18Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M25.8332 17.1665V20.4165C25.8332 22.2148 24.3815 23.6665 22.5832 23.6665H21.4998C21.4998 22.4748 20.5248 21.4998 19.3332 21.4998C18.1415 21.4998 17.1665 22.4748 17.1665 23.6665H11.8332C11.8332 22.4748 10.8582 21.4998 9.6665 21.4998C8.47484 21.4998 7.49984 22.4748 7.49984 23.6665H6.4165C4.61817 23.6665 3.1665 22.2148 3.1665 20.4165V17.1665H16.0832C17.2748 17.1665 18.2498 16.1915 18.2498 14.9998V7.4165H20.2432C21.0232 7.4165 21.7382 7.83901 22.1282 8.51068L23.9807 11.7498H22.5832C21.9873 11.7498 21.4998 12.2373 21.4998 12.8332V16.0832C21.4998 16.679 21.9873 17.1665 22.5832 17.1665H25.8332Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.66667 25.8333C10.8633 25.8333 11.8333 24.8633 11.8333 23.6667C11.8333 22.47 10.8633 21.5 9.66667 21.5C8.47005 21.5 7.5 22.47 7.5 23.6667C7.5 24.8633 8.47005 25.8333 9.66667 25.8333Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M19.3332 25.8333C20.5298 25.8333 21.4998 24.8633 21.4998 23.6667C21.4998 22.47 20.5298 21.5 19.3332 21.5C18.1366 21.5 17.1665 22.47 17.1665 23.6667C17.1665 24.8633 18.1366 25.8333 19.3332 25.8333Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M25.8333 15V17.1667H22.5833C21.9875 17.1667 21.5 16.6792 21.5 16.0833V12.8333C21.5 12.2375 21.9875 11.75 22.5833 11.75H23.9808L25.8333 15Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default History;
