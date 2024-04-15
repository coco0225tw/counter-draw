import { CountDownSetterWrapper } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer } from '@/redux/feature/timer/timerSlice';
import { RootState } from '@/redux/store';
import React, { useRef } from 'react';
export function CountDownSetter() {
  const dispatch = useDispatch();
  const { isRunning } = useSelector((state: RootState) => state.timer);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleNotNumberKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    ['e', 'E', '+', '-', '.'].includes(e.key) && e.preventDefault(); //todo 0
  };

  const startTimerHandler = () => {
    const inputValue = inputRef?.current?.value;
    if (!inputValue || isRunning) return;
    dispatch(startTimer(parseInt(inputValue) * 60));
  };

  return (
    <CountDownSetterWrapper>
      <input
        onKeyDown={(e) => handleNotNumberKey(e)}
        id="minuteInput"
        type="number"
        min="1"
        step="1" //todp
        readOnly={isRunning}
        ref={inputRef}
      />
      <div>分鐘</div>
      <div className="button" onClick={startTimerHandler}>
        設定
      </div>
    </CountDownSetterWrapper>
  );
}
