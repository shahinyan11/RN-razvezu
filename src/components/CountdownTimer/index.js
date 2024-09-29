import React, {useEffect, useRef, useState} from 'react';
import {Text} from 'react-native';

const CountdownTimer = ({initialTime, onStart, onFinish}) => {
  const timerRef = useRef();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    setTime(initialTime);

    timerRef.current = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    return () => clearInterval(timerRef.current);
  }, [initialTime]);

  useEffect(() => {
    initialTime > 0 && onStart?.();
  }, [initialTime, onStart]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const minutesView = minutes.toString().padStart(2, '0');
    const secondsView = seconds.toString().padStart(2, '0');

    return `${minutesView}:${secondsView}`;
  };

  useEffect(() => {
    if (time === 0) {
      clearInterval(timerRef.current);

      initialTime > 0 && onFinish?.();
    }
  }, [time]);

  return <Text>{formatTime()}</Text>;
};

export default CountdownTimer;
