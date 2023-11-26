import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { getCurrentUserThunk } from 'redux/user/operations';

export const expenseApi = axios.create({
  baseURL: 'https://expense-tracker.b.goit.study/api/',
});

export const setToken = token => {
  expenseApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearToken = () => {
  expenseApi.defaults.headers.common.Authorization = '';
};

export const registerThunk = createAsyncThunk(
  'register',
  async (credential, thunkApi) => {
    try {
      const { data } = await expenseApi.post('auth/register', credential);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  'login',
  async (credential, thunkApi) => {
    try {
      const { data } = await expenseApi.post('auth/login', credential);
      setToken(data.accessToken);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk('logout', async (_, thunkApi) => {
  try {
    await expenseApi.post('auth/logout');
    clearToken();
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const refreshThunk = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const refreshData = {
      refreshToken: thunkApi.getState().auth.refreshToken,
      sid: thunkApi.getState().auth.sid,
    };
    if (!refreshData.refreshToken) {
      return thunkApi.rejectWithValue('Token is not exist');
    }
    try {
      setToken(refreshData.refreshToken);
      const { data } = await expenseApi.get('auth/current', {
        params: { sid: refreshData.sid },
      });
      setToken(data.accessToken);
      thunkApi.dispatch(getCurrentUserThunk());
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
