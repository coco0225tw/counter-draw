import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import { clearWinner } from '@/redux/feature/participant/participantSlice';

import { ResultWrapper } from '@/styles/result';
import Image from 'next/image';
import Profile from '../../public//images/result_profile.png';
import { useEffect } from 'react';
export default function Result() {
  const winner = useSelector((state: RootState) => state.participant.winner);
  const router = useRouter();
  const dispatch = useDispatch();

  const clickHandler = () => {
    router.push('/');
    dispatch(clearWinner());
  };
  useEffect(() => {
    if (!winner) router.push('/');
  }, [winner]);
  return (
    <ResultWrapper onClick={clickHandler}>
      <div className="title">抽獎結果</div>
      <div className="profile">
        <div className="profile_img">
          <Image height={400} width={400} priority src={Profile} alt="result page profile" />
        </div>
        <div className="name">{winner}</div>
      </div>
    </ResultWrapper>
  );
}
