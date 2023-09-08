import { cn } from "@/lib/utils";

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Container = ({ className, children, ...props }: Props) => {
	return (
		<div
			{...props}
			className={cn(
				"container mx-auto px-8 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl",
				className
			)}
		>
			{children}
		</div>
	);
};
