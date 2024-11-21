import type { RootState } from "@/redux/store";
import { createSelector } from "@reduxjs/toolkit";

const todosSelector = (state: RootState) => state.todo

export const ongingTasksSelector = createSelector([todosSelector], (state) =>
	state.filter((todo) => !todo.completed))

export const finishedTasksSelector = createSelector([todosSelector], (state) =>
	state.filter((todo) => todo.completed))

export const taskSelector = (state: RootState, id: number) =>
	state.todo.find((todo) => todo.id === id);
