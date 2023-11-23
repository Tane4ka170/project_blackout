import { createSlice } from '@reduxjs/toolkit';
import {
  createTransactionThunk,
  getTransactionsThunk,
  deleteTransactionThunk,
  updateTransactionThunk,
} from './operations';

const initialState = {
  transactions: [],
  loading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(createTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(createTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions.push(action.payload);
      })
      .addCase(createTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getTransactionsThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getTransactionsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(getTransactionsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(deleteTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        const transactionId = action.payload;
        state.transactions = state.transactions.filter(
          transaction => transaction.id !== transactionId
        );
      })
      .addCase(deleteTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateTransactionThunk.pending, state => {
        state.loading = true;
      })
      .addCase(updateTransactionThunk.fulfilled, (state, action) => {
        state.loading = false;
        const searchTerm = action.payload.toLowerCase();
        state.transactions = state.transactions.filter(
          transaction =>
            transaction.comment.toLowerCase().includes(searchTerm) ||
            transaction.date.includes(searchTerm) ||
            transaction.time.includes(searchTerm)
        );
      })
      .addCase(updateTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const transactionReducer = transactionsSlice.reducer;
