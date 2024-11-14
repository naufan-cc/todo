import { useState } from "react";
import { deleteTodo, toggleComplete, updateTodo } from "./todoSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks";

import {
	Card,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const TodoList: React.FC = () => {
	const todos = useAppSelector((state) => state.todos);
	const [isEditing, setIsEditing] = useState<number | null>(null);
	const [currentTask, setCurrentTask] = useState<string>("");

	const dispatch = useAppDispatch();

	const handleEdit = (id: number, task: string) => {
		setIsEditing(id);
		setCurrentTask(task);
	};

	const handleUpdate = (id: number) => {
		dispatch(updateTodo({ id, newTask: currentTask }));
		setIsEditing(null);
		setCurrentTask("");
	};

	return (
		<div>
			{todos.map((todo) => (
				<Card key={todo.id}>
					<div className="flex p-4 gap-4">
						<div>
							<Input
								type="checkbox"
								checked={todo.completed}
								onClick={() => dispatch(toggleComplete(todo.id))}
								className="size-5 mt-2"
							/>
						</div>
						<div className="w-full space-y-1">
							{isEditing ? (
								<Input
									type="text"
									value={currentTask}
									onChange={(e) => setCurrentTask(e.target.value)}
								/>
							) : (
								<CardTitle className={`text-2xl font-light ${todo.completed && "line-through"}`}>
									{todo.task}
								</CardTitle>
							)}

							<CardDescription>{todo.id}</CardDescription>
						</div>
						{isEditing ? (
							<div className="flex gap-2">
								<Button onClick={() => handleUpdate(todo.id)}>Save</Button>
								<Button onClick={() => setIsEditing(null)}>Cancel</Button>
							</div>
						) : (
							<div className="flex gap-2">
								<Button onClick={() => handleEdit(todo.id, todo.task)}>
									Edit
								</Button>
								<Button onClick={() => dispatch(deleteTodo(todo.id))}>
									Delete
								</Button>
							</div>
						)}
					</div>
				</Card>
			))}
		</div>
	);
};

export default TodoList;
