import { HomeWrapper } from '@/styles';
import { Participant } from '../components/Participant';
import { Timer } from '../components/Timer';

export default function Home() {
  return (
    <HomeWrapper>
      <Timer />
      <Participant />
    </HomeWrapper>
  );
}
