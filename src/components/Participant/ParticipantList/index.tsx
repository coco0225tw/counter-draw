import { ParticipantItemListWrapper } from './style';
import { ParticipantItem } from '../ParticipantItem';
export function ParticipantList() {
  const array = new Array(10).fill(undefined);
  return (
    <ParticipantItemListWrapper>
      {array.map((item, index) => {
        return <ParticipantItem key={index} name={'abc'} />;
      })}
    </ParticipantItemListWrapper>
  );
}
