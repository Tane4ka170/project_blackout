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
  async (id, thunkApi) => {
    try {
      await expenseApi.delete(`transactions/${id}`);

      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateTransactionThunk = createAsyncThunk(
  'updateTransaction',
  async ({ type, _id, ...transaction }, thunkApi) => {
    try {
      const { data } = await expenseApi.patch(
        `transactions/${type}/${_id}`,
        transaction
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
