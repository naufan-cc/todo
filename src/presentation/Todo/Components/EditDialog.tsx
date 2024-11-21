import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Button } from "@/shared/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { useEffect, useState } from "react";
// import { updateTodo } from "../Hooks/useRepository";
import { taskSelector } from "@/interactions/Todo/Repositories";
import { updateTodo } from "@/redux/features/todo/todoSlice";

export function EditDialog({ id }: { id: number }) {
	const todo = useAppSelector((state) => taskSelector(state, id));

	const [currentTask, setCurrentTask] = useState<string>("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (todo) {
			setCurrentTask(todo.task);
		}
	}, [todo]);

	const dispatch = useAppDispatch();

	const handleUpdate = async () => { 
		// updateTodo.execute(id, currentTask);
		dispatch(updateTodo({ id, newTask: currentTask }));
		setOpen(false);
	};

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="outline">Edit</Button>
			</DialogTrigger>
			<DialogContent className="sm:max-w-[425px]">
				<DialogHeader>
					<DialogTitle>Edit Task</DialogTitle>
					<DialogDescription />
				</DialogHeader>
				<div className="flex flex-col gap-4">
					<Label htmlFor="task">Task</Label>
					<Input
						id="task"
						value={currentTask}
						onChange={(e) => setCurrentTask(e.target.value)}
						className="col-span-3"
					/>
				</div>
				<DialogFooter>
					<Button type="submit" onClick={handleUpdate}>
						Save changes
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
