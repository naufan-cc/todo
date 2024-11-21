import type { Todo } from "@/domain/Todo/Entities/Todo";
import { createReducer } from "@reduxjs/toolkit";
import { addTodo, completeTodo, deleteTodo, updateTodo } from "./Todo.action";

const initialState: Todo[] = [];

export const todoReducer = createReducer(initialState, (builder) => {
	builder.addCase(addTodo, (state, action) => {
		const newTodo: Todo = {
			id: Date.now(),
			task: action.payload,
			completed: false,
		};
		state.push(newTodo);
	});
	builder.addCase(completeTodo, (state, action) => {
		const todo = state.find((todo) => todo.id === action.payload);
		if (todo) {
			todo.completed = !todo.completed;
		}
	});
	builder.addCase(updateTodo, (state, action) => {
		const todo = state.find((todo) => todo.id === action.payload.id);
		if (todo) {
			todo.task = action.payload.task;
		}
	});
	builder.addCase(deleteTodo, (state, action) => {
		return state.filter((todo) => todo.id !== action.payload);
	});
});