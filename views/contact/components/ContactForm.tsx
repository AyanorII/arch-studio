"use client";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

import { SectionHeading } from "@/components/pages/SectionHeading";
import { Button, Container } from "@/components/ui";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { MoveRightIcon } from "lucide-react";

import { ContactSchema, contactSchema } from "../schemas";

export const ContactForm = () => {
	const formMethods = useForm<ContactSchema>({
		defaultValues: {
			name: "",
			email: "",
			message: "",
		},
		resolver: zodResolver(contactSchema),
	});

	const {
		control,
		formState: { errors },
		handleSubmit,
		reset,
	} = formMethods;

	const onSubmit = handleSubmit(() => {
		reset();
		toast("Form submitted!", {
			type: "success",
		});
	});

	return (
		<section className="mb-40">
			<Container>
				<div className="lg:grid lg:grid-cols-[0.25fr,_1fr] lg:gap-28 xl:gap-40">
					<SectionHeading className="mb-10">Connect with us</SectionHeading>
					<Form {...formMethods}>
						{/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
						<form onSubmit={onSubmit}>
							<div className="flex flex-col gap-5">
								<FormField
									control={control}
									name="name"
									render={({ field }) => (
										<FormItem>
											{errors.name ? (
												<FormMessage />
											) : (
												<FormLabel>Name</FormLabel>
											)}
											<FormControl>
												<Input placeholder="Name" {...field} />
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="email"
									render={({ field }) => (
										<FormItem>
											{errors.email ? (
												<FormMessage />
											) : (
												<FormLabel>Email</FormLabel>
											)}
											<FormControl>
												<Input placeholder="Email" {...field} />
											</FormControl>
										</FormItem>
									)}
								/>
								<FormField
									control={control}
									name="message"
									render={({ field }) => (
										<FormItem>
											{errors.message ? (
												<FormMessage />
											) : (
												<FormLabel>Message</FormLabel>
											)}
											<FormControl>
												<Textarea placeholder="Message" {...field} />
											</FormControl>
										</FormItem>
									)}
								/>
							</div>
							<Button
								variant="default"
								size="lg"
								type="submit"
								className="ml-auto block"
							>
								<MoveRightIcon />
							</Button>
						</form>
					</Form>
				</div>
			</Container>
		</section>
	);
};
