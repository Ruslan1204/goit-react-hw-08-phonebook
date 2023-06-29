// import { initState } from './contacts.init-state';

import { contactsReducer } from './contacts.slice';

import { configureStore } from '@reduxjs/toolkit';

import { filterReducer } from './filter.slice';
import { authReducer } from './auth/authLogin.slice';

export const store = configureStore({
  // preloadedState: initState,
  devTools: true,
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    auth: authReducer,
  },
});
