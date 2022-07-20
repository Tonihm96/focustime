import React, { useState, createContext, useContext, useEffect } from 'react';

import { TimerContextInterface, TimerProps } from './types';

export const TimerContext = createContext<TimerContextInterface>({
  isFocusing: false,
  minutes: 0,
  setMinutes(): void {},
  seconds: 0,
  setSeconds(): void {},
  startTimer(): void {},
  pauseTimer(): void {},
  clearTimer(): void {},
  isDoneFocusing: false
});

export function TimerContextProvider({ children }: TimerProps) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [isFocusing, setIsFocusing] = useState(false);

  var secondsTimer: NodeJS.Timeout;

  function start() {
    if (minutes + seconds !== 0) {
      setIsFocusing(true);
    }
  }

  function pause() {
    clearTimeout(secondsTimer);
    setIsFocusing(false);
  }

  function clear() {
    pause();
    setSeconds(0);
    setMinutes(0);
  }

  useEffect(() => {
    isFocusing
      ? (secondsTimer = setTimeout(() => {
          if (seconds == 0 && minutes == 0) {
            setIsFocusing(false);
          } else {
            if (seconds <= 0) {
              setSeconds(59);
              setMinutes(minutes - 1);
            } else setSeconds(seconds - 1);
          }
        }, 1000))
      : null; //clearTimeout(secondsTimer);
  }, [isFocusing, seconds]);

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
        clearTimer: clear,
        isDoneFocusing: seconds == 0 && minutes == 0
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}

export default function useTimer() {
  return useContext(TimerContext);
}
