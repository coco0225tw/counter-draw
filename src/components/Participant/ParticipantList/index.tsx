import { ParticipantItemListWrapper } from './style';
import { ParticipantItem } from '../ParticipantItem';
import { useSelector, useDispatch } from 'react-redux';
import { initiateList } from '@/redux/feature/participant/participantSlice';

import { RootState } from '@/redux/store';
import { useEffect, useCallback } from 'react';
import { getRandomNumber } from '@/utils/randomNumber';
import { Participant } from '@/redux/feature/participant/types';
//todo custom hook
//todo rwd
export function ParticipantList() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.participant.participants);
  const minListSize = 10;
  const maxListSize = 20;
  //todo check
  // const generateList = (data: string[], sizes: number) => {
  //   const result: Participant[] = [];
  //   for (let i = sizes; i--; i > 0) {
  //     let id = getRandomNumber(0, data.length);
  //     const newItem: Participant = { name: data[id], id: i };
  //     result.push(newItem);
  //     data.filter((_, index) => index !== i);
  //   }
  //   console.log(result);
  //   return result;
  // };
  // useEffect(() => {
  //   const getNames = () => {
  //     fetch('data/names.json')
  //       .then((response) => {
  //         return response.json();
  //       })
  //       .then((data) => {
  //         const listSize = getRandomNumber(minListSize, maxListSize + 1);
  //         const result = generateList(data.names, listSize);
  //         dispatch(initiateList(result));
  //       })
  //       .catch((err) => alert(err));
  //   };
  //   if (list.length === 0) {
  //     getNames();
  //   }
  // }, [list]);

  return (
    <ParticipantItemListWrapper>
      {list.map((participant: Participant, index) => {
        return <ParticipantItem key={index} name={participant.name} />;
      })}
    </ParticipantItemListWrapper>
  );
}
