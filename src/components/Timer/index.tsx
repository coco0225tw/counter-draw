import { TimerSetter } from './TimerSetter';
import { TimerCounter } from './TimerCounter';
import { TimerWrapper } from './style';

export function Timer() {
  return (
    <TimerWrapper>
      <div className="title">抽獎時間</div>
      <TimerSetter />
      <TimerCounter />
    </TimerWrapper>
  );
}
