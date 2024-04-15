import { CountDownTimerWrapper, Colon } from './style';

export function CountDownTimer() {
  const leftSecond = 10;
  const leftMinute = 10;
  return (
    <CountDownTimerWrapper>
      {leftMinute}
      <Colon />
      {leftSecond}
    </CountDownTimerWrapper>
  );
}
