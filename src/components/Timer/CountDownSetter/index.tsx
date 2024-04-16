import { CountDownSetterWrapper } from './style';
import { useSelector, useDispatch } from 'react-redux';
import { startTimer } from '@/redux/feature/timer/timerSlice';
import { RootState } from '@/redux/store';
import React, { useRef } from 'react';
export function CountDownSetter() {
  const dispatch = useDispatch();
  const { isRunning } = useSelector((state: RootState) => state.timer);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const inputValue = inputRef?.current?.value;
    const inputLength = inputValue?.length;
    const firstIsZero = inputLength === 0 && e.key == '0';
    const lengthIsThree = inputLength === 3;
    if (lengthIsThree) {
      e.preventDefault();
      alert('最長3位數!');
    }
    if (['e', 'E', '+', '-', '.'].includes(e.key) || firstIsZero) e.preventDefault();
  };

  const startTimerHandler = () => {
    const inputValue = inputRef?.current?.value;
    if (!inputValue || isRunning) return;
    dispatch(startTimer(parseInt(inputValue) * 60));
  };

  return (
    <CountDownSetterWrapper>
      <input
        onKeyDown={(e) => handleKey(e)}
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
