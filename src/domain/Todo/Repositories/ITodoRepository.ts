export interface ITodoRepository {
	addTodo(task: string): void;
	completeTodo(id: number): void;
	deleteTodo(id: number): void;
	updateTodo(id: number, task: string): void;
}
