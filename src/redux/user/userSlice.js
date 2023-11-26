import { createSlice } from '@reduxjs/toolkit';

import {
  changeAvatarThunk,
  deleteAvatarThunk,
  getCurrentUserThunk,
  updateUserInfoThunk,
} from './operations';
import { loginThunk } from 'redux/auth/operations';

const initialState = {
  user: {
    name: '',
    currency: '',
    avatar: null,
  },
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getCurrentUserThunk.pending, state => {
        state.loading = true;
      })
      .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(getCurrentUserThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(updateUserInfoThunk.pending, state => {
        state.loading = true;
      })
      .addCase(updateUserInfoThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserInfoThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(changeAvatarThunk.pending, state => {
        state.loading = true;
      })
      .addCase(changeAvatarThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user.avatar = action.payload;
      })
      .addCase(changeAvatarThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteAvatarThunk.pending, state => {
        state.loading = true;
      })
      .addCase(deleteAvatarThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.user.avatar = action.payload;
      })
      .addCase(deleteAvatarThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const userReducer = userSlice.reducer;
