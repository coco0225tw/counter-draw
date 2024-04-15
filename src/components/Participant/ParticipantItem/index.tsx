import { ParticipantItemWrapper } from './style';
import Image from 'next/image';
import profileImg from '../../../public/profile.png';
export function ParticipantItem({ name }: { name: string }) {
  return (
    <ParticipantItemWrapper>
      <div className="profile">
        <Image width={64} height={64} src={profileImg} alt="profile" />
      </div>
      <div className="name">{name}</div>
    </ParticipantItemWrapper>
  );
}
