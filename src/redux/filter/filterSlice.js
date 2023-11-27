import { createSlice } from '@reduxjs/toolkit';
const year = new Date().getFullYear();
const month = new Date().getMonth() + 1;
const day = new Date().getDate();

const initialState = {
  filter: '',
  startDate: { year, month, day },
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
