import Link, { LinkProps } from "next/link";

import { cn } from "@/lib/utils";

import { Routes } from "@/lib/constants";

type Props = {
	href: Routes;
	className?: string;
	children: React.ReactNode;
} & LinkProps;

export const NavLink = ({ className, children, ...props }: Props) => {
	return (
		<Link
			{...props}
			className={cn(
				"text-lg font-bold text-[#7D828F] hover:text-[#1B1D23] transition",
				className
			)}
		>
			{children}
		</Link>
	);
};
