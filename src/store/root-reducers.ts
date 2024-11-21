import { combineReducers } from "@reduxjs/toolkit";
import persistReducer from "redux-persist/es/persistReducer";
import { todoConfig } from "./config/todo-persist";
import { todoReducer } from "./reducers/Todo/Todo.reducer";

export const rootReducer = combineReducers({
	todo: todoReducer,
});

export const persistedReducer = persistReducer(todoConfig, rootReducer);
