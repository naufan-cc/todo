import TodoForm from "../Components/TodoForm";
import TodoList from "../Components/TodoList";

function TodoPage() {
	return (
		<main className="space-y-10 p-10">
			<h1>To-Do List</h1>
			<TodoForm />
			<TodoList />
		</main>
	);
}

export default TodoPage;
