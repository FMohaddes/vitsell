import { useDispatch as useReduxDispatch , useSelector as useReduxSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
//
import { rootPersistConfig , rootReducer } from "./rootReducer";
import { createWrapper } from "next-redux-wrapper";
import { persistStore } from "redux-persist";

// ----------------------------------------------------------------------


export const makeStore = () => configureStore({
     reducer: rootReducer,
     middleware: (getDefaultMiddleware) => getDefaultMiddleware(
          {
               serializableCheck: false,
               immutableCheck: false
          }
     ),
     devTools: process.env.NODE_ENV !== 'production',
});


const store = makeStore(rootPersistConfig);

const persistor = persistStore(store); // Nasty hack
const useSelector = useReduxSelector;



const useDispatch = () => useReduxDispatch();
const wrapper = createWrapper(makeStore, { debug: true });

export {persistor,store, wrapper, useSelector, useDispatch };
