"use client";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loaderReducer from "@/globalState/globalLoaderState"; 

const rootReducer = combineReducers({
  loader: loaderReducer, 
});

export const store = configureStore({
  reducer: rootReducer, 
});
