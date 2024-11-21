import type { ITodoRepository } from "./TodoRepository";
import { store } from "@/store/store";
import { addTodo, completeTodo, deleteTodo, updateTodo } from "@/store/reducers/Todo/Todo.action";

export class TodoRepositoryImpl implements ITodoRepository {

	addTodo(task: string): void {
		store.dispatch(addTodo(task));
	}

	completeTodo(id: number): void {
		store.dispatch(completeTodo(id));
	}

	deleteTodo(id: number): void {
		store.dispatch(deleteTodo(id));
	}

	updateTodo(id: number, task: string): void {
		store.dispatch(updateTodo({ id, task }));
	}
}
