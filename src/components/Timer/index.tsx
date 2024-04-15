import { CountDownSetter } from './CountDownSetter';
import { CountDownTimer } from './CountDownTimer';
import { TimerWrapper } from './style';

export function Timer() {
  return (
    <TimerWrapper>
      <div className="title">抽獎時間</div>
      <CountDownSetter />
      <CountDownTimer />
    </TimerWrapper>
  );
}
