export interface TimerContextInterface {
  isFocusing: boolean;
  minutes: number;
  setMinutes: React.Dispatch<React.SetStateAction<number>>;
  seconds: number;
  setSeconds: React.Dispatch<React.SetStateAction<number>>;
  startTimer(): void;
  pauseTimer(): void;
  clearTimer(): void;
  timerEnded: boolean;
}

export type TimerProps = {
  children: React.ReactNode;
};
