import { ParticipantItemListWrapper } from './style';
import { ParticipantItem } from '../ParticipantItem';
import { useSelector, useDispatch } from 'react-redux';
import { initiateList } from '@/redux/feature/participant/participantSlice';

import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import { getRandomNumber } from '@/utils/randomNumber';
import { Participant } from '@/redux/feature/participant/types';

export function ParticipantList() {
  const dispatch = useDispatch();
  const list = useSelector((state: RootState) => state.participant.participants);
  const minListSize = 10;
  const maxListSize = 20;

  useEffect(() => {
    let ignore = false;

    const generateList = (data: string[], sizes: number) => {
      const result: Participant[] = [];

      for (let i = 0; i < sizes; i++) {
        let id = getRandomNumber(0, data.length);
        const newItem: Participant = { name: data[id], id: i };
        result.push(newItem);
        data.splice(id, 1);
      }
      return result;
    };
    const getNames = () => {
      fetch('data/names.json')
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          if (ignore) return;
          const listSize = getRandomNumber(minListSize, maxListSize + 1);
          const result = generateList(data.names, listSize);
          dispatch(initiateList(result));
        })
        .catch((err) => alert(err));
    };

    if (list.length === 0) {
      getNames();
    }
    return () => {
      ignore = true;
    };
  }, [list]);

  return (
    <ParticipantItemListWrapper>
      {list.map((participant: Participant) => {
        return <ParticipantItem key={participant.id} name={participant.name} />;
      })}
    </ParticipantItemListWrapper>
  );
}
