import { ResultWrapper } from '@/styles/result';
import Image from 'next/image';
import Profile from '../../public/result_profile.png';
export default function Result() {
  const name = '123';
  return (
    <ResultWrapper>
      <div className="title">抽獎結果</div>
      <div className="profile">
        <div className="profile_img">
          <Image height={400} width={400} priority src={Profile} alt="result page profile" />
        </div>
        <div className="name">{name}</div>
      </div>
    </ResultWrapper>
  );
}
