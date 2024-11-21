import { z } from "zod";

export const TodoFormResolver = z.object({
	task: z
		.string()
		.min(8, { message: "Task is too short" })
		.max(20, { message: "Task is too long" }),
});

export type TodoFormType = z.infer<typeof TodoFormResolver>;
