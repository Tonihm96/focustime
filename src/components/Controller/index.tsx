import React from 'react';
import { View } from 'react-native';

import useTimer from '../../contexts/TimerContext';

import { Container, TimerButtonsContainer } from './styles';

import { ControlButton } from '../ControlButton';
import { TimeButton } from '../TimeButton';

export function Controller() {
  const { isFocusing, startTimer, pauseTimer } = useTimer();

  return (
    <Container>
      <ControlButton
        onPress={isFocusing ? pauseTimer : startTimer}
        name={isFocusing ? 'pause' : 'play'}
      />
      {isFocusing ? null : (
        <TimerButtonsContainer>
          <TimeButton time='20' />
          <TimeButton time='25' />
          <TimeButton time='30' />
        </TimerButtonsContainer>
      )}
    </Container>
  );
}
