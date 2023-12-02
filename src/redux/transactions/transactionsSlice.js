import { createSlice } from '@reduxjs/toolkit';

import {
  createTransactionThunk,
  getTransactionsThunk,
  deleteTransactionThunk,
  updateTransactionThunk,
} from './operations';


import { toast } from 'react-toastify';

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
        // state = { ...state }
        if (action?.payload?.type === 'expenses') {
          state.transactions.push(action.payload);
        }
        toast.success('Transaction added')
      })
      .addCase(createTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        toast.error('Oops, something went wrong, try again later')
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
        const transactionId = action?.payload;

        state.transactions = state.transactions?.filter(
          transaction => transaction._id !== transactionId
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
        const itemIndex = state.transactions.findIndex(item => item._id === action.payload._id);
        if (itemIndex !== -1) {
          state.loading = false;
          state.transactions?.splice(itemIndex, 1, action.payload);
        }
        toast.success('Transaction updated')
      })
      .addCase(updateTransactionThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const transactionReducer = transactionsSlice.reducer;
