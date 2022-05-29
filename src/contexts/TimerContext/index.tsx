import React, { useState, createContext, useContext, useEffect } from 'react';

import { TimerContextInterface, TimerProps } from './types';

export const TimerContext = createContext<TimerContextInterface>({
  // default values
  isFocusing: false,
  minutes: 0,
  setMinutes(): void {},
  seconds: 0,
  setSeconds(): void {},
  startTimer(): void {},
  pauseTimer(): void {},
  clearTimer(): void {}
});

export function TimerContextProvider({ children }: TimerProps) {
  const [seconds, setSeconds] = useState(3);
  const [minutes, setMinutes] = useState(0);
  const [isFocusing, setIsFocusing] = useState(false);

  var secondsTimer: NodeJS.Timeout;

  function start() {
    if (seconds > 0) {
      setIsFocusing(true);
      secondsTimer = setTimeout(() => setSeconds(seconds - 1), 1000);
    }
  }

  function pause() {
    setIsFocusing(false);
    clearTimeout(secondsTimer);
  }

  function clear() {
    setIsFocusing(false);
    clearTimeout(secondsTimer);
    setSeconds(0);
    setMinutes(0);
  }

  useEffect(() => {
    isFocusing
      ? (secondsTimer = setTimeout(() => {
          if (seconds <= 0) {
            setSeconds(59);
            setMinutes(minutes - 1);
          } else minutes >= 0 && seconds > 0 ? setSeconds(seconds - 1) : null;
        }, 1000))
      : clearTimeout(secondsTimer);
  }, [seconds]);

  return (
    <TimerContext.Provider
      value={{
        isFocusing,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        startTimer: start,
        pauseTimer: pause,
        clearTimer: clear
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export function useTimer() {
  return useContext(TimerContext);
}
