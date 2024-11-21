import type { ITodoRepository } from '../Repositories/TodoRepository';

export const DeleteTodoUseCase =
	(repository: ITodoRepository) =>
	(id: number): void =>
		repository.deleteTodo(id);