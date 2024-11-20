import { TodoRepository } from "@/domain/Todo/Repositories/TodoRepository";
import { AddTodoUseCase } from "@/domain/Todo/UseCases/AddTodoUseCase";
import { CompleteTodoUseCase } from "@/domain/Todo/UseCases/CompleteTodoUseCase";
import { DeleteTodoUseCase } from "@/domain/Todo/UseCases/DeleteTodoUseCase";
import { UpdateTodoUseCase } from "@/domain/Todo/UseCases/UpdateTodouseCase";

const todoRepository = new TodoRepository()
export const addTodo = new AddTodoUseCase(todoRepository)
export const completeTodo = new CompleteTodoUseCase(todoRepository)
export const updateTodo = new UpdateTodoUseCase(todoRepository)
export const deleteTodo = new DeleteTodoUseCase(todoRepository)