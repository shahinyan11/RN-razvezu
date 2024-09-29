import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Profile = ({size, color}) => (
  <Svg width={size || 28} height={size || 28} viewBox="0 0 28 28" fill="none">
    <Path
      d="M15.1733 13.7757C15.0649 13.7648 14.9349 13.7648 14.8158 13.7757C12.2374 13.689 10.1899 11.5765 10.1899 8.9765C10.1899 6.32234 12.3349 4.1665 14.9999 4.1665C17.6541 4.1665 19.8099 6.32234 19.8099 8.9765C19.7991 11.5765 17.7516 13.689 15.1733 13.7757Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.75678 17.7735C7.13511 19.5285 7.13511 22.3885 9.75678 24.1327C12.7359 26.126 17.6218 26.126 20.6009 24.1327C23.2226 22.3777 23.2226 19.5177 20.6009 17.7735C17.6326 15.791 12.7468 15.791 9.75678 17.7735Z"
      stroke={color || '#B3B2B8'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default Profile;
