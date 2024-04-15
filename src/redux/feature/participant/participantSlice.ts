import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ParticipantState, Participant } from './types';
import { getRandomNumber } from '@/utils/randomNumber';
const initialState: ParticipantState = {
  participants: [],
  winner: '',
};
const participantSlice = createSlice({
  name: 'participant',
  initialState: initialState,
  reducers: {
    drawWinner: (state) => {
      const winnerId = getRandomNumber(0, state.participants.length);
      state.winner = state.participants[winnerId].name;
      state.participants = state.participants.filter((participant: Participant) => participant.id !== winnerId);
    },
    initiateList: (state, action: PayloadAction<Participant[]>) => {
      state.participants = action.payload;
    },
    clearWinner: (state) => {
      state.winner = '';
    },
  },
});

export const { drawWinner, initiateList, clearWinner } = participantSlice.actions;
export default participantSlice.reducer;
