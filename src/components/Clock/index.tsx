import React from 'react';

import useTimer from '../../contexts/TimerContext';

import { Container, ClockText } from './styles';

export function Clock() {
  const { minutes, seconds } = useTimer();

  return (
    <Container>
      <ClockText>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </ClockText>
    </Container>
  );
}
/**/
