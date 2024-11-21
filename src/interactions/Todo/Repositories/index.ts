import type { RootState } from "@/redux/store";

export const ongingTasksSelector = (state: RootState) =>
	state.todo.filter((todo) => !todo.completed);

export const finishedTasksSelector = (state: RootState) =>
	state.todo.filter((todo) => todo.completed);

export const todoSelector = (state: RootState, id: number) =>
	state.todo.find((todo) => todo.id === id);
