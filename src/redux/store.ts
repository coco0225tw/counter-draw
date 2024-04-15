import { configureStore } from '@reduxjs/toolkit';
import timerReducer from './feature/timer/timerSlice';
import participantReducer from './feature/participant/participantSlice';
export const store = configureStore({
  reducer: {
    timer: timerReducer,
    participant: participantReducer,
  },
  devTools: process.env.NODE_ENV !== 'development' ? false : true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
