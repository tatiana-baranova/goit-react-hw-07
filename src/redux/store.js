import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from "redux-persist";
import contactsReducer from './contactsSlice'
import filtersReducer from './filtersSlice'

const persistConfigContacts = {
    key: 'contacts',
    storage,
    version: 1,
    whitelist: ["items"],
};

const rootReducer = combineReducers({
    contacts: persistReducer(persistConfigContacts, contactsReducer),
    filters: filtersReducer,
});



export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
    serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE", "persist/REGISTER"], // 🔹 Додано ігнорування несеріалізованих значень
    },
    }),
});


export const persistor = persistStore(store);