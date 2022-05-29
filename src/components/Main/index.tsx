import React from 'react';

import { Container } from './styles';

import { Clock } from '../Clock';
import { Controller } from '../Controller';

export function Main() {
  return (
    <Container>
      <Clock />
      <Controller />
    </Container>
  );
}
