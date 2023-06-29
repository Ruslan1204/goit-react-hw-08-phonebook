import { createSlice } from '@reduxjs/toolkit';


import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from './contactsOperations';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, state => {
        state.isLoading = false;
      })
      .addCase(addContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(deleteContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(item => item.id === payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { contactsFilterAction, contactsDeleteAction, addContactsAction } =
  contactSlice.actions;

export const contactsReducer = contactSlice.reducer;
