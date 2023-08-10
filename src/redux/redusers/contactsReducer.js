import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: null,
  isError: null,
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
});

export const contactsReducer = contactsSlice.reducer;
