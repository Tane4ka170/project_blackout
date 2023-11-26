import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
  updateCategoryThunk,
} from './operations';

const initialState = {
  categories: {
    items: [],
    error: null,
    isLoading: false,
    deletedId: null,
  },
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentId: (state, { payload }) => {
      state.categories.deletedId = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories.items = payload;
        state.categories.isLoading = false;
      })
      .addCase(deleteCategoryThunk.fulfilled, (state, { payload }) => {
        state.categories.items = state.categories.items.filter(
          item => item._id !== payload
        );
        state.categories.isLoading = false;
      })
      .addCase(createCategoryThunk.fulfilled, (state, { payload }) => {
        state.categories.items.push(payload);
        state.categories.isLoading = false;
      })
      .addCase(updateCategoryThunk.fulfilled, (state, { payload }) => {
        const categoryIndex = state.categories.items.findIndex(
          item => item._id === payload._id
        );
        const { categoryName } = state.categories.items[categoryIndex];
        if (categoryName !== payload.categoryName) {
          toast.success('You have successfully changed the name of category');
        }
        state.categories.items[categoryIndex] = payload;
        state.categories.isLoading = false;
      })
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.pending,
          deleteCategoryThunk.pending,
          createCategoryThunk.pending,
          updateCategoryThunk.pending
        ),
        (state, { payload }) => {
          state.categories.isLoading = true;
          state.categories.error = null;
        }
      )
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.rejected,
          deleteCategoryThunk.rejected,
          createCategoryThunk.rejected,
          updateCategoryThunk.rejected
        ),
        (state, { payload }) => {
          state.categories.error = payload;
          state.categories.isLoading = false;
        }
      );
  },
});

export const { setCurrentId } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
