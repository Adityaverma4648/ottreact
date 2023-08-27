import { configureStore , combineReducers } from '@reduxjs/toolkit'

// importing persist
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';


// importing slices
import AppSlice from "./AppSlice";
import AuthSlice from './AuthSlice';
import DiscoverSlice from './DiscoverSlice'
import ProviderSlice from './ProviderSlice'
import popularSlice from './popularSlice';
import SavedWatchSlice from "./SavedWatchSlice";
import SearchSlice from "./SearchSlice";

const persistConfig = {
  key: 'root',
  storage,
}
const rootReducer = combineReducers({ 
    app : AppSlice,
    auth : AuthSlice,  
    discover : DiscoverSlice,
    provider : ProviderSlice,
    popular : popularSlice,
    savedWatch : SavedWatchSlice,
    search : SearchSlice,
})

const persistedReducer = persistReducer(persistConfig, rootReducer )


export const store = configureStore({
  reducer: persistedReducer,
})
 

export const persistor = persistStore(store);