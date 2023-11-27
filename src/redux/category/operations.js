import { createAsyncThunk } from '@reduxjs/toolkit';
import { expenseApi } from 'redux/auth/operations';

export const createCategoryThunk = createAsyncThunk(
  'createCategory',
  async (category, thunkApi) => {
    try {
      const { data } = await expenseApi.post('categories', category);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCategoriesThunk = createAsyncThunk(
  'getAllCategories',
  async (_, thunkApi) => {
    try {
      const { data } = await expenseApi.get('categories');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updateCategoryThunk = createAsyncThunk(
  'updateCategory',
  async ({ id, ...body }, thunkApi) => {
    try {
      const { data } = await expenseApi.patch(`categories/${id}`, body);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteCategoryThunk = createAsyncThunk(
  'deleteCategory',
  async (id, thunkApi) => {
    try {
      await expenseApi.delete(`categories/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
