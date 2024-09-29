import Svg, {Path, Rect} from 'react-native-svg';

const FileMessage = ({size, color, backgroundColor}) => (
  <Svg width={size || 40} height={size || 40} viewBox="0 0 40 40" fill="none">
    <Rect width="40" height="40" rx="7" fill={backgroundColor || 'white'} />
    <Path
      d="M17.8333 28.6667H22.8333C27 28.6667 28.6667 27 28.6667 22.8333V17.8333C28.6667 13.6667 27 12 22.8333 12H17.8333C13.6667 12 12 13.6667 12 17.8333V22.8333C12 27 13.6667 28.6667 17.8333 28.6667Z"
      stroke={color || 'black'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.25 18H17"
      stroke={color || 'black'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M23.25 23H17"
      stroke={color || 'black'}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default FileMessage;
