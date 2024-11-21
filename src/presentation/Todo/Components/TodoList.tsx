import { finishedTasksSelector, ongingTasksSelector } from "@/store/reducers/Todo/Todo.selector";
import TodoCard from "./TodoCard";
import { useAppSelector } from "@/store/hooks";

const TodoList: React.FC = () => {
	const ongoingTasks = useAppSelector(ongingTasksSelector);
	const finishedTasks = useAppSelector(finishedTasksSelector);

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
