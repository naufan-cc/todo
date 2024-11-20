import type { TodoRepository } from '../Repositories/TodoRepository';

export class UpdateTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    execute(id: number, task: string): void {
        this.todoRepository.updateTodo(id, task);
    }
}