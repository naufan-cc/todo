import type { ITodoRepository } from "../Repositories/TodoRepository";

export const AddTodoUseCase =
	(repository: ITodoRepository) =>
	(task: string): void =>
		repository.addTodo(task);
