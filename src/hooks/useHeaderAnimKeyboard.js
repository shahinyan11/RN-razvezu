import {Animated, Keyboard} from 'react-native';
import {useEffect, useState} from 'react';

const useHeaderAnimKeyboard = (height = 72) => {
  const [isOpen, setIsOpen] = useState('');
  const animHeight = new Animated.Value(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setIsOpen(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setIsOpen(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  useEffect(() => {
    Animated.timing(animHeight, {
      toValue: isOpen ? -height : 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [isOpen]);

  const animatedStyle = {
    marginTop: animHeight,
  };

  return {
    animatedStyle,
  };
};

export default useHeaderAnimKeyboard;
