import { createAsyncThunk } from '@reduxjs/toolkit';
import { expenseApi } from '../auth/operations';

export const createTransactionThunk = createAsyncThunk(
  'createTransaction',
  async (transactionData, thunkApi) => {
    try {
      const { data } = await expenseApi.post('transactions', transactionData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getTransactionsThunk = createAsyncThunk(
  'getTransactions',
  async ({ type, date }, thunkApi) => {
    try {
      const { data } = await expenseApi.get(`transactions/${type}`, {
        params: { date },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'deleteTransaction',
  async ({ type, id }, thunkApi) => {
    try {
      const { data } = await expenseApi.delete(`transaction/${type}`, {
        params: { id },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async ({ type, id, transactionData }, thunkApi) => {
    try {
      const { data } = await expenseApi.patch(
        `transactions/${type}/${id}`,
        transactionData
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
