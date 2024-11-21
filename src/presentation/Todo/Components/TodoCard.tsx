import { Card, CardTitle } from "@/shared/components/ui/card";
import { Input } from "@/shared/components/ui/input";
import { Button } from "@/shared/components/ui/button";
import type { Todo } from "@/domain/Todo/Entities/Todo";
import { EditDialog } from "./EditDialog";
import { useState } from "react";
// import { completeTodo, deleteTodo } from "../Hooks/useRepository";
import { useAppDispatch } from "@/redux/hooks";
import { completeTodo, deleteTodo } from "@/redux/features/todo/todoSlice";

const TodoCard: React.FC<Todo> = ({ id, task, completed }) => {
	const [checked, setChecked] = useState(true);

	const dispatch = useAppDispatch();

	const handleToggle = async () => {
		// completeTodo.execute(id);
		dispatch(completeTodo(id));
	};

	const handleDelete = async () => {
		// deleteTodo.execute(id);
		dispatch(deleteTodo(id));
	};

	return (
		<Card>
			<div className="flex p-4 gap-4 items-center sm:flex-col">
				<div className="w-full flex gap-2 items-center">
					<Input
						type="checkbox"
						onClick={handleToggle}
						defaultChecked={completed ? checked : !checked}
						onChange={() => setChecked((state) => !state)}
						className="size-5"
					/>
					<CardTitle
						className={`text-2xl font-light ${completed && "line-through"}`}
					>
						{task}
					</CardTitle>
				</div>
				<div className="flex gap-2 sm:w-full">
					<EditDialog id={id} />
					<Button variant="destructive" onClick={handleDelete}>
						Delete
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default TodoCard;
