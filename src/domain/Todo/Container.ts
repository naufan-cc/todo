import { TodoRepositoryImpl } from "./Repositories/TodoRepositoryImpl";
import { AddTodoUseCase } from "./UseCases/AddTodoUseCase";
import { CompleteTodoUseCase } from "./UseCases/CompleteTodoUseCase";
import { DeleteTodoUseCase } from "./UseCases/DeleteTodoUseCase";
import { UpdateTodoUseCase } from "./UseCases/UpdateTodoUseCase";

export function useTodoModule() {
	const repository = new TodoRepositoryImpl();

	const commands = {
		addTodo: AddTodoUseCase(repository),
		completeTodo: CompleteTodoUseCase(repository),
        updateTodo: UpdateTodoUseCase(repository),
        deleteTodo: DeleteTodoUseCase(repository),
	};

	return { ...commands };
}
