import { useAppSelector } from "@/store/hooks";
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
import { taskSelector } from "@/store/reducers/Todo/Todo.selector";
import { useTodoModule } from "@/domain/Todo/Container";

export function EditDialog({ id }: { id: number }) {
	const todo = useAppSelector((state) => taskSelector(state, id));
	const { updateTodo } = useTodoModule();

	const [currentTask, setCurrentTask] = useState<string>("");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (todo) {
			setCurrentTask(todo.task);
		}
	}, [todo]);

	const handleUpdate = async () => {
		updateTodo(id, currentTask);
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
