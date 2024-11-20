import type { TodoRepository } from '../Repositories/TodoRepository';

export class CompleteTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    execute(id: number): void {
        this.todoRepository.completeTodo(id);
    }
}