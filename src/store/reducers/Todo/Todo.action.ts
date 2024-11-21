import { createAction } from "@reduxjs/toolkit";
import { TODO_ACTION_TYPES } from "./Todo.types";

type UpdateTodo = {
	id: number;
	task: string;
};

export const addTodo = createAction<string>(TODO_ACTION_TYPES.ADD_TODO);
export const completeTodo = createAction<number>(
	TODO_ACTION_TYPES.COMPLETE_TODO,
);
export const updateTodo = createAction<UpdateTodo>(
	TODO_ACTION_TYPES.UPDATE_TODO,
);
export const deleteTodo = createAction<number>(TODO_ACTION_TYPES.DELETE_TODO);
