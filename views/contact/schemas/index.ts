import * as z from "zod";

export const contactSchema = z.object({
	name: z
		.string()
		.min(1, { message: "Name can't be blank" })
		.max(50, { message: "Name can't be longer than 50 characters" }),
	email: z.string().email({ message: "Invalid email address" }),
	message: z.string().min(1, { message: "Message can't be blank" }),
});

export type ContactSchema = z.infer<typeof contactSchema>;
