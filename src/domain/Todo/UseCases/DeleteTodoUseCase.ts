import type { TodoRepository } from '../Repositories/TodoRepository';

export class DeleteTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    execute(id: number): void {
        this.todoRepository.deleteTodo(id);
    }
}