import { useAppSelector } from "@/redux/hooks";
import TodoCard from "./TodoCard";

const TodoList: React.FC = () => {
	const todos = useAppSelector((state) => state.todo);

	const ongoingTasks = todos.filter((todo) => !todo.completed);
	const finishedTasks = todos.filter((todo) => todo.completed);

	const hasOngoingTasks = ongoingTasks.length > 0;
	const hasFinishedTasks = finishedTasks.length !== 0;

	return (
		<div className="flex flex-col gap-10">
			<div className="flex flex-col gap-4">
				<p>Ongoing tasks</p>{" "}
				{hasOngoingTasks ? (
					ongoingTasks.map((todo) => (
						<TodoCard
							key={todo.id}
							id={todo.id}
							task={todo.task}
							completed={todo.completed}
						/>
					))
				) : (
					<p className="text-center italic font-medium text-slate-700">
						No ongoing tasks
					</p>
				)}
			</div>
			{hasFinishedTasks && (
				<div className="flex flex-col gap-4">
					<p>Finished tasks</p>{" "}
					{finishedTasks.map((todo) => (
						<TodoCard
							key={todo.id}
							id={todo.id}
							task={todo.task}
							completed={todo.completed}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default TodoList;
