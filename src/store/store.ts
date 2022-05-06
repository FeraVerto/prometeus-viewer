import { configureStore } from '@reduxjs/toolkit';
import { converterSlice } from './converterSlice';

export const store = configureStore({
  reducer: {
    converter: converterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
