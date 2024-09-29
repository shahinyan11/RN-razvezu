import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useHeaderHeight} from '@react-navigation/elements';

const useScreenContainer = () => {
  const headerHeight = useHeaderHeight();
  const insets = useSafeAreaInsets();

  const containerStyle = {
    flex: 1,
    paddingTop: headerHeight || insets.top,
  };

  return {
    containerStyle,
  };
};

export default useScreenContainer;
