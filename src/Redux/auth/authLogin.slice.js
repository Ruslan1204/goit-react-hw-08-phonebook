import { createSlice } from '@reduxjs/toolkit';
import { logIn, logOut, register } from '../auth/authOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      // .addCase(register.pending, state => {
      //   state.isLoggedIn = true;
      // })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        state.token = payload;
      })
      .addCase(register.rejected, state => {
        state.isLoggedIn = false;
      })
      // .addCase(logIn.pending, state => {
      //   state.isLoggedIn = true;
      // })
      .addCase(logIn.fulfilled, (state, { payload }) => {
        state.isLoggedIn = true;
        state.user = payload;
        state.token = payload;
      })
      .addCase(logIn.rejected, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.pending, state => {
        state.isLoggedIn = false;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, state => {
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;
