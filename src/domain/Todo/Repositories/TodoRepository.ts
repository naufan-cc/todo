import {
	addTodo,
	completeTodo,
	deleteTodo,
	updateTodo,
} from "@/redux/features/todo/todoSlice";
import type { ITodoRepository } from "./ITodoRepository";
import { useDispatch } from "react-redux";

export class TodoRepository implements ITodoRepository {
	private dispatch = useDispatch();

	addTodo(task: string): void {
		this.dispatch(addTodo(task));
	}

	completeTodo(id: number): void {
		this.dispatch(completeTodo(id));
	}

	deleteTodo(id: number): void {
		this.dispatch(deleteTodo(id));
	}

	updateTodo(id: number, newTask: string): void {
		this.dispatch(updateTodo({ id, newTask }));
	}
}
