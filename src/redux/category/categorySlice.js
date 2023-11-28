import { toast } from 'react-toastify';
import {
  createCategoryThunk,
  deleteCategoryThunk,
  getCategoriesThunk,
  updateCategoryThunk,
} from './operations';

const { createSlice, isAnyOf } = require('@reduxjs/toolkit');

const initialState = {
  categories: {
    incomes: [],
    expenses: [],
  },
  error: null,
  isLoading: false,
  deletedId: null,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCurrentId: (state, { payload }) => {
      state.deletedId = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(getCategoriesThunk.fulfilled, (state, { payload }) => {
        state.categories = payload;
        state.isLoading = false;
      })
      .addCase(deleteCategoryThunk.fulfilled, (state, { payload }) => {
        const deletingIncCategory = state.categories?.incomes?.find(
          category => category._id === payload
        );
        const deletingExpCategory = state.categories?.expenses?.find(
          category => category._id === payload
        );

        if (deletingIncCategory) {
          state.categories.incomes = state.categories?.incomes?.filter(
            category => category !== deletingIncCategory
          );
          toast.info('You deleted the category successfully');
        }

        if (deletingExpCategory) {
          state.categories.expenses = state.categories?.expenses?.filter(
            category => category !== deletingExpCategory
          );
          toast.info('You deleted the category successfully');
        }

        state.isLoading = false;
      })
      .addCase(createCategoryThunk.fulfilled, (state, { payload }) => {
        const addedIncCategory = state.categories?.incomes?.find(
          category => category?.categoryName === payload?.categoryName
        );

        const addedExpCategory = state.categories?.expenses?.find(
          category => category?.categoryName === payload.categoryName
        );

        if (payload.type === 'incomes') {
          if (addedIncCategory) {
            toast.warning('Category with this name exists already');
            return;
          } else {
            state.categories?.incomes?.push(payload);
          }
        }
        if (payload.type === 'expenses') {
          if (addedExpCategory) {
            toast.warning('Category with this name exists already');
            return;
          } else {
            state.categories?.expenses?.push(payload);
          }
        }

        state.isLoading = false;
      })
      .addCase(updateCategoryThunk.fulfilled, (state, { payload }) => {
        const incomeCategory = state.categories?.incomes?.find(
          category => category._id === payload._id
        );
        const expenseCategory = state.categories?.expenses?.find(
          category => category._id === payload._id
        );

        if (incomeCategory) {
          incomeCategory.categoryName = payload.categoryName;
          toast.success('You changed the category successfully');
        }

        if (expenseCategory) {
          expenseCategory.categoryName = payload.categoryName;
          toast.success('You changed the category successfully');
        }
      })
      .addMatcher(
        isAnyOf(
          getCategoriesThunk.pending,
          deleteCategoryThunk.pending,
          createCategoryThunk.pending,
          updateCategoryThunk.pending
        ),
        (state, { payload }) => {
          state.isLoading = true;
          state.error = null;
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
          state.error = payload;
          state.isLoading = false;
        }
      );
  },
});

export const { setCurrentId } = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;
