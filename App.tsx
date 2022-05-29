import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';

import { TimerContextProvider } from './src/contexts/TimerContext';

import { Main } from './src/components/Main';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <TimerContextProvider>
        <StatusBar style='auto' hidden={true} />
        <Main />
      </TimerContextProvider>
    </ThemeProvider>
  );
}
