import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountDownState } from './types';
const initialState: CountDownState = {
  leftTime: 0,
  isRunning: false,
};
const timerSlice = createSlice({
  name: 'countDown',
  initialState: initialState,
  reducers: {
    tickTimer: (state) => {
      state.leftTime -= 1;
    },
    startTimer: (state, action: PayloadAction<number>) => {
      state.isRunning = true;
      state.leftTime = 2;
    },
    clearTimer: (state) => {
      state.isRunning = false;
    },
  },
});

export const { tickTimer, startTimer, clearTimer } = timerSlice.actions;
export default timerSlice.reducer;
