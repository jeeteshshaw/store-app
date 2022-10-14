import AsyncStorage from '@react-native-async-storage/async-storage';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
// import auth from './auth';
import common from './common';
// import user from './user';

const rootReducer = combineReducers({
    // auth:auth,
    common:common,
    // user:user
});

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['common'] // Things u want to persist
    // blacklist: ['medimate'], // Things u dont

};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    //middlewareState,
    middleware: getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});

let persistor = persistStore(store);

export default store;
export { persistor };