// import { initState } from './contacts.init-state';

import { contactsReducer } from './contact/contacts.slice';

import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filter.slice';
import { authReducer } from './auth/authLogin.slice';

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

import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

// const persistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  // preloadedState: initState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
