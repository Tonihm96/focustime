import React from 'react';

import { Container } from './styles';

import { Clock } from '../../components/Clock';
import { Controller } from '../../components/Controller';

export function Main() {
  return (
    <Container>
      <Clock />
      <Controller />
    </Container>
  );
}
