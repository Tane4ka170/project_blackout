import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
  startDate: '2023-11-26',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, { payload }) => {
      state.filter = payload;
    },
    setStartDate: (state, { payload }) => {
      state.startDate = payload;
    },
  },
});

export const { setFilter, setStartDate } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
