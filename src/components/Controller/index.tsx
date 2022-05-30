import React from 'react';

import useTimer from '../../contexts/TimerContext';

import { Container, TimerButtonsContainer } from './styles';

import { ControlButton } from '../ControlButton';
import { TimeButton } from '../TimeButton';

export function Controller() {
  const { isFocusing, isDoneFocusing, startTimer, pauseTimer } = useTimer();

  return (
    <Container>
      <ControlButton
        onPress={isFocusing ? pauseTimer : startTimer}
        name={isFocusing ? 'pause' : 'play'}
      />
      {isDoneFocusing ? (
        <TimerButtonsContainer>
          <TimeButton time='20' />
          <TimeButton time='25' style={{ marginTop: 30 }} />
          <TimeButton time='30' />
        </TimerButtonsContainer>
      ) : null}
    </Container>
  );
}
