import { twMerge } from "tailwind-merge";

type Props = {
	children: React.ReactNode;
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	className?: string;
};

export const SectionHeading = ({ children, className, as = "h2" }: Props) => {
	const Heading = as;

	return (
		<Heading
			className={twMerge([
				"font-bold text-5xl md:text-7xl whitespace-pre-wrap",
				className,
			])}
		>
			{children}
		</Heading>
	);
};
