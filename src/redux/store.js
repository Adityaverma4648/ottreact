import { configureStore , combineReducers } from '@reduxjs/toolkit'

// importing persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

// importing slices
import AppSlice from "./AppSlice";
import AuthSlice from './AuthSlice';
import UpcomingSlice from './UpcomingSlice'
import ProviderSlice from './ProviderSlice'
import popularSlice from './popularSlice';
import SavedWatchSlice from "./SavedWatchSlice";
import SearchSlice from "./SearchSlice";
import MovieSlice from './MovieSlice';
import PlayerSlice from './PlayerSlice';

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
    app : AppSlice,
    auth : AuthSlice,  
    player : PlayerSlice,
    upcoming : UpcomingSlice,
    provider : ProviderSlice,
    popular : popularSlice,
    savedWatch : SavedWatchSlice,
    search : SearchSlice,
    movie : MovieSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer )


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
})
 

export const persistor = persistStore(store);