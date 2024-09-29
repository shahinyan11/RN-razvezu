import React from 'react';
import Svg, {Path} from 'react-native-svg';

const Loader = ({size, color}) => (
  <Svg width={size || 28} height={size || 28} viewBox="0 0 28 28" fill="none">
    <Path
      d="M26.727 14C26.727 21.0291 21.0288 26.7273 13.9997 26.7273C6.97065 26.7273 1.27246 21.0291 1.27246 14C1.27246 6.9709 6.97065 1.27271 13.9997 1.27271C21.0288 1.27271 26.727 6.9709 26.727 14ZM3.81791 14C3.81791 19.6232 8.37647 24.1818 13.9997 24.1818C19.623 24.1818 24.1816 19.6232 24.1816 14C24.1816 8.37671 19.623 3.81816 13.9997 3.81816C8.37647 3.81816 3.81791 8.37671 3.81791 14Z"
      fill="#F4F4F4"
    />
    <Path
      d="M13.9997 2.54543C13.9997 1.84252 13.4285 1.26611 12.7291 1.33629C11.0003 1.50975 9.32056 2.03591 7.79563 2.88726C5.89924 3.94599 4.30533 5.47242 3.1656 7.32127C2.02588 9.17013 1.37825 11.2799 1.28436 13.4498C1.19047 15.6197 1.65343 17.7775 2.6292 19.7179C3.60496 21.6583 5.06106 23.3167 6.85892 24.5353C8.65677 25.7538 10.7366 26.4921 12.9004 26.6797C15.0642 26.8673 17.24 26.498 19.2207 25.6071C20.8135 24.8906 22.2375 23.856 23.4077 22.5716C23.8811 22.052 23.7591 21.2498 23.1948 20.8306C22.6305 20.4114 21.8386 20.5357 21.3524 21.0433C20.4503 21.9849 19.3729 22.7475 18.1765 23.2857C16.5919 23.9984 14.8513 24.2938 13.1202 24.1437C11.3892 23.9937 9.72536 23.4031 8.28708 22.4282C6.8488 21.4533 5.68392 20.1266 4.90331 18.5743C4.12269 17.022 3.75232 15.2957 3.82743 13.5598C3.90255 11.8239 4.42065 10.1361 5.33243 8.65701C6.24421 7.17793 7.51933 5.95679 9.03645 5.1098C10.1819 4.47031 11.4365 4.06018 12.7303 3.8976C13.4277 3.80996 13.9997 3.24834 13.9997 2.54543Z"
      fill="black"
      fillOpacity="0.5"
    />
  </Svg>
);

export default Loader;
