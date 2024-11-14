import { addTodo } from "./todoSlice";
import { useAppDispatch } from "@/app/hooks";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z} from "zod";

const formSchema = z.object({
	task: z
		.string()
		.min(8, { message: "Task is too short" })
		.max(20, { message: "Task is too long" }),
});

const TodoForm: React.FC = () => {
	const dispatch = useAppDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      task: "",
    },
  })


  function onSubmit(values: z.infer<typeof formSchema>) {
    dispatch(addTodo(values.task))
  }

	return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="task"
          render={({ field }) => (
            <FormItem>
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
