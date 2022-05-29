import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { useTimer } from '../../contexts/TimerContext';

export function Main() {
  const { minutes, seconds, startTimer, pauseTimer, clearTimer } = useTimer();

  return (
    <View style={styles.container}>
      <Text>
        {minutes.toString().padStart(2, '0')}:
        {seconds.toString().padStart(2, '0')}
      </Text>
      <Button title='Start' onPress={() => startTimer()} />
      <Button title='Pause' onPress={() => pauseTimer()} />
      <Button title='Stop' onPress={() => clearTimer()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
