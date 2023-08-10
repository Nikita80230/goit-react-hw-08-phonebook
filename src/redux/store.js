import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './redusers/contactsReducer';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
});
