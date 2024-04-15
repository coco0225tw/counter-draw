import { ParticipantList } from './ParticipantList';
import { ParticipantWrapper } from './style';

export function Participant() {
  return (
    <ParticipantWrapper>
      <div className="title">參與抽獎名單</div>
      <ParticipantList />
    </ParticipantWrapper>
  );
}
