import React from 'react';
import { StatusBar } from 'expo-status-bar';

import { TimerContextProvider } from './src/contexts/TimerContext';

import { Main } from './src/components/Main';

export default function App() {
  return (
    <TimerContextProvider>
      <StatusBar style='auto' hidden={true} />
      <Main />
    </TimerContextProvider>
  );
}
