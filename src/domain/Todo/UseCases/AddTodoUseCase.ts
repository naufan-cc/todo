import type { TodoRepository } from '../Repositories/TodoRepository';

export class AddTodoUseCase {
    constructor(private todoRepository: TodoRepository) {}

    execute(task: string): void {
        this.todoRepository.addTodo(task);
    }
}