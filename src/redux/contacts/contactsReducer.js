import { createSlice } from '@reduxjs/toolkit';
import {
  addContactThunk,
  deleteContactThunk,
  getContactsThunk,
} from './contactsOperations';

const initialState = {
  isLoading: false,
  error: null,
  contacts: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(getContactsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getContactsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.error = null;
        state.contacts = action.payload;
      })
      .addCase(getContactsThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addCase(addContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts.push(action.payload);
      })
      .addCase(addContactThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      })
      .addCase(deleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          ({ id }) => id !== action.payload.id
        );
      })
      .addCase(deleteContactThunk.rejected, (state, action) => {
        state.isLoading = true;
        state.error = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
