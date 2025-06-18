import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import { baseApi } from "../redux/api/baseApi";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore,
     FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
 } from "redux-persist";

const persistConfig = {
    key: "auth", //any name as wish
    storage, //it denote the local storage to persist
}

//first paremeter get key and a storage as function, second other is get the reducer in where i use it to persist  
const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
    reducer : {
        [baseApi.reducerPath]: baseApi.reducer,
        //auth: authReducer,
        // replace 'auth: authReducer' with 'persistedAuthReducer'because 
        //persistedAuthReducer contains authReducer as second peratmeter and it make 'persist' by persistReducer
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleWares) => 
        //getDefaultMiddleWares().concat(baseApi.middleware)
        getDefaultMiddleWares({
             serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
        }).concat(baseApi.middleware)
});

export type RootState= ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);