import TodoForm from "./features/todos/TodoForm";
import TodoList from "./features/todos/todoList";

function App() {
	return (
		<div style={{ padding: "2rem" }}>
			<h1>To-Do List</h1>
			<TodoForm />
			<TodoList />
		</div>
	);
}

export default App;
