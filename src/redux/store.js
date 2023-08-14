import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/contactsReducer';
import { authReducer } from './auth/authReducer';

// export const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//     auth: authReducer,
//   },
// });

import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

// import { filterReducer } from './contacts/filterSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'], //isLoggedIn
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    // filter: filterReducer,
    auth: persistedAuthReducer,
  },
  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store);
