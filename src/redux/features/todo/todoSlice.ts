import type { Todo } from "@/domain/Todo/Entities/Todo";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

const initialState: Todo[] = [];

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
		},
		completeTodo: (state, action: PayloadAction<number>) => {
			const todo = state.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		deleteTodo: (state, action: PayloadAction<number>) => {
			return state.filter((todo) => todo.id !== action.payload);
		},
		updateTodo: (
			state,
			action: PayloadAction<{ id: number; newTask: string }>,
		) => {
			const todo = state.find((todo) => todo.id === action.payload.id);
			if (todo) {
				todo.task = action.payload.newTask;
			}
		},
	},
});

export const { addTodo, completeTodo, deleteTodo, updateTodo } =
	todoSlice.actions;

export default todoSlice.reducer;
