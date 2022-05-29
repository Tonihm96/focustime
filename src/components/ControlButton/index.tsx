import React from 'react';
import { TouchableOpacityProps, useWindowDimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '../../global/styles/theme';
import useTimer from '../../contexts/TimerContext';

import { Container } from './styles';

interface ControlButtonProps extends TouchableOpacityProps {
  name: string;
}

export function ControlButton({ name, onPress }: ControlButtonProps) {
  const { isFocusing, timerEnded } = useTimer();
  const { width } = useWindowDimensions();

  return (
    <Container activeOpacity={timerEnded ? 1 : 0.2} onPress={onPress}>
      <Icon
        color={theme.colors.primary}
        name={name}
        size={isFocusing ? width / 3 : width / 4}
      />
    </Container>
  );
}
