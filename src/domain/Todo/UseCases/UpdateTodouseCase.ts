import type { ITodoRepository } from "../Repositories/TodoRepository";

export const UpdateTodoUseCase =
	(repository: ITodoRepository) =>
	(id: number, task: string): void =>
		repository.updateTodo(id, task);
