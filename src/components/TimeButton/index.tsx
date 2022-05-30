import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import useTimer from '../../contexts/TimerContext';

import { Container, TimeText } from './styles';

interface TimeButtonProps extends TouchableOpacityProps {
  time: string;
  custom?: boolean;
}

export function TimeButton({ time, ...props }: TimeButtonProps) {
  const { setMinutes, setSeconds } = useTimer();

  return (
    <Container
      onPress={() => {
        setMinutes(Number(time));
        setSeconds(0);
      }}
      {...props}
    >
      <TimeText>{time}</TimeText>
    </Container>
  );
}
