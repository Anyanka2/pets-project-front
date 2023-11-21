import { configureStore } from '@reduxjs/toolkit';

// import { authenticateReducer } from './auth/sliceUser';
import {
  persistStore
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
} from 'redux-persist';
import { petsReducer } from './user/slice';

// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token','user'],
// };

export const store = configureStore({
  reducer: {
    pets: petsReducer
    // auth: persistReducer(authPersistConfig, authenticateReducer),
  }
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
//   devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
