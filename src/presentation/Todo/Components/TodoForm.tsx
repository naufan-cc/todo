import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/shared/components/ui/button";
import {
	Form,
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/shared/components/ui/form";
import { Input } from "@/shared/components/ui/input";
import { z } from "zod";
import { addTodo } from "../Hooks/useRepository";

const formSchema = z.object({
	task: z
		.string()
		.min(8, { message: "Task is too short" })
		.max(20, { message: "Task is too long" }),
});

const TodoForm: React.FC = () => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			task: "",
		},
	});

	async function onSubmit(values: z.infer<typeof formSchema>) {
		addTodo.execute(values.task);
		form.reset();
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="space-y-8 flex sm:flex-col gap-2"
			>
				<FormField
					control={form.control}
					name="task"
					render={({ field }) => (
						<FormItem className="w-full">
							<FormLabel>Task</FormLabel>
							<FormControl>
								<Input placeholder="Mencuci piring" {...field} />
							</FormControl>
							<FormDescription>
								Tuliskan apa yang ingin kamu kerjakan hari ini
							</FormDescription>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">Submit</Button>
			</form>
		</Form>
	);
};

export default TodoForm;
