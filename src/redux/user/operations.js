import { createAsyncThunk } from '@reduxjs/toolkit';
import { expenseApi } from '../auth/operations';

export const getCurrentUserThunk = createAsyncThunk(
  'getCurrentUser',
  async (_, thunkApi) => {
    try {
      const { data } = await expenseApi.get('users/current');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateUserInfoThunk = createAsyncThunk(
  'updateUserInfo',
  async (userData, thunkApi) => {
    try {
      const { data } = await expenseApi.patch('users/info', userData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const changeAvatarThunk = createAsyncThunk(
  'changeAvatar',
  async (avatarFile, thunkApi) => {
    try {
      const formData = new FormData();
      formData.append('avatar', avatarFile);

      const { data } = await expenseApi.patch('users/avatar', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteAvatarThunk = createAsyncThunk(
  'deleteAvatar',
  async (avatarId, thunkApi) => {
    try {
      const { data } = await expenseApi.delete(`users/avatar/${avatarId}`);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
