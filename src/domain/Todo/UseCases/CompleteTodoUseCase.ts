import type { ITodoRepository } from "../Repositories/TodoRepository";

export const CompleteTodoUseCase =
	(repository: ITodoRepository) =>
	(id: number): void =>
		repository.completeTodo(id);
