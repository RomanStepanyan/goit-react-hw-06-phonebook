import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from '@reduxjs/toolkit';
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
import logger from 'redux-logger';
import contactsReduсer from './Reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({ contacts: contactsReduсer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem('contacts', serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem('contacts');
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

// const rootReduсer = combineReducers({
//   contacts: contactsReduсer,
// });

export const store = configureStore(
  {
    reducer: persistedReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',
  },

  //   loadFromLocalStorage(),
  //   composeWithDevTools(),
);

// const store = createStore(
//   rootReduсer,
//   loadFromLocalStorage(),
//   composeWithDevTools(),
// );
// store.subscribe(() => saveToLocalStorage(store.getState()));

export const persistor = persistStore(store);

// export default { store, persistor };
