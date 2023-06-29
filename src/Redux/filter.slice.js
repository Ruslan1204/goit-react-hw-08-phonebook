import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    contactsFilterAction(state, { payload }) {
      state = payload;
      return state;
    },
  },
});

export const { contactsFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
