import { CountDownTimerWrapper, Colon } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { tickTimer, clearTimer } from '@/redux/feature/timer/timerSlice';
import { drawWinner } from '@/redux/feature/participant/participantSlice';
import { RootState } from '@/redux/store';
import { formatTimer } from '@/utils/formatTimer';

export function CountDownTimer() {
  const dispatch = useDispatch();
  const { leftTime, isRunning } = useSelector((state: RootState) => state.timer);
  const intervalRef = useRef<NodeJS.Timeout>();
  const leftSeconds = leftTime * 60;
  const [timeLeft, setTimeLeft] = useState<{ minute: string; second: string }>(formatTimer(leftSeconds));
  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        dispatch(tickTimer());
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [isRunning]);

  useEffect(() => {
    setTimeLeft(formatTimer(leftTime));

    if (intervalRef.current && leftTime === 0) {
      clearInterval(intervalRef.current);
      dispatch(clearTimer());
      dispatch(drawWinner());
      //route to result todo
    }
  }, [leftTime]);

  return (
    <CountDownTimerWrapper>
      {timeLeft.minute}
      <Colon />
      {timeLeft.second}
    </CountDownTimerWrapper>
  );
}
