import React from 'react';
import { useWindowDimensions } from 'react-native';

import useTimer from '../../contexts/TimerContext';

import { Container, CancelIcon } from './styles';

export function CancelButton() {
  const { clearTimer } = useTimer();
  const { width } = useWindowDimensions();

  return (
    <Container
      onPress={() => {
        clearTimer();
      }}
    >
      <CancelIcon name='times' size={width * 0.15} />
    </Container>
  );
}
