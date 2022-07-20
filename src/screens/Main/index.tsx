import React from 'react';
import { useKeepAwake } from 'expo-keep-awake';

import { Container } from './styles';

import { Clock } from '../../components/Clock';
import { Controller } from '../../components/Controller';

export function Main() {
  useKeepAwake();

  return (
    <Container>
      <Clock />
      <Controller />
    </Container>
  );
}
