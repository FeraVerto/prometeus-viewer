import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { IConvertedDataItem } from '../types';

export interface ConverterState {
  converter: IConvertedDataItem[];
}

const initialState: ConverterState = {
  converter: [],
};

export const converterSlice = createSlice({
  name: 'converter',
  initialState,
  reducers: {
    saveData: (state, { payload }) => {
      state.converter = payload;
    },
  },
});

export const converterActions = converterSlice.actions;
export const converterDataSelector = (state: RootState) =>
  state.converter ?? [];

export default converterSlice.reducer;
