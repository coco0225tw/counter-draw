import { CountDownSetterWrapper } from './style';

export function CountDownSetter() {
  return (
    <CountDownSetterWrapper>
      <input id="minuteInput" type="number" min="1" step="1"></input>
      <div>分鐘</div>
      <div className="button">設定</div>
    </CountDownSetterWrapper>
  );
}
