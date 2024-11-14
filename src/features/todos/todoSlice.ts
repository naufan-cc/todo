import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

import type { Todo } from "@/types";

const getTodos = (): Todo[] => {
	const storedTodos = localStorage.getItem("todos");
	return storedTodos ? JSON.parse(storedTodos) : [];
};

const initialState: Todo[] = getTodos();

const todoSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<string>) => {
			const newTodo: Todo = {
				id: Date.now(),
				task: action.payload,
				completed: false,
			};
			state.push(newTodo);
			localStorage.setItem("todos", JSON.stringify(state));
		},
		toggleComplete: (state, action: PayloadAction<number>) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
				localStorage.setItem("todos", JSON.stringify(state));
			}
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			const newState = state.filter((todo) => todo.id !== action.payload);
			localStorage.setItem("todos", JSON.stringify(newState));
            return newState
		},
		updateTodo: (
			state,
			action: PayloadAction<{ id: number; newTask: string }>,
		) => {
			const todo = state.find((todo) => todo.id === action.payload.id);
			if (todo) {
				todo.task = action.payload.newTask;
				localStorage.setItem("todos", JSON.stringify(state));
			}
		},
	},
});

export const { addTodo, toggleComplete, deleteTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;
