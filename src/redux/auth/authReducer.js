import { createSlice } from '@reduxjs/toolkit';
import {
  loginThunk,
  logoutThunk,
  reLoginThunk,
  registerThunk,
} from 'redux/auth/authOperations';

const initialState = {
  isLoading: false,
  isError: null,
  userData: null,
  isLoggedIn: false,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(registerThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(loginThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(reLoginThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(reLoginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        // state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(reLoginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(logoutThunk.pending, state => {
        state.isLoading = true;
        state.isError = null;
      })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
        // state.token = action.payload.token;
        state.isLoggedIn = false;
      })
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
