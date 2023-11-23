import { createAsyncThunk } from '@reduxjs/toolkit';
import { expenseApi, setToken } from '../auth/operations';

export const createTransactionThunk = createAsyncThunk(
  'createTransaction',
  async (transactionData, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;

    if (!savedToken) {
      return thunkApi.rejectWithValue('Token is not exist');
    }
    try {
      setToken(savedToken);
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
    const savedToken = thunkApi.getState().auth.token;

    if (!savedToken) {
      return thunkApi.rejectWithValue('Token is not exist');
    }
    try {
      setToken(savedToken);
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
    const savedToken = thunkApi.getState().auth.token;

    if (!savedToken) {
      setToken(savedToken);
      return thunkApi.rejectWithValue('Token is not exist');
    }
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
    const savedToken = thunkApi.getState().auth.token;

    if (!savedToken) {
      return thunkApi.rejectWithValue('Token is not exist');
    }
    try {
      setToken(savedToken);
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
