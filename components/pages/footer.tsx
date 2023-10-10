import Image from "next/image";
import Link from "next/link";

import { MoveRightIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Routes } from "@/lib/constants";

import { Container, buttonVariants } from "../ui";

export const Footer = () => {
	return (
		<Container className="p-0 md:max-w-none md:p-0 lg:relative lg:px-8">
			<footer className="relative mt-16 flex w-full flex-col items-center bg-[#EEEFF4] pb-10 pt-24 md:static md:w-[80%] md:flex-row md:items-center md:gap-10 md:p-0 lg:mt-0 lg:w-[90%] lg:gap-20">
				<Link
					href={Routes.Home}
					className="absolute -top-16 grid place-items-center bg-[#1B1D23] px-8 py-12 md:static lg:h-[200px] lg:w-[200px]"
				>
					<Image
						src="/images/logo.svg"
						width={58}
						height={24}
						alt="Arch"
						className="invert lg:h-[40px] lg:w-[96px]"
					/>
				</Link>
				<ul className="flex flex-col gap-8 text-center text-lg font-bold text-[#7D828F] md:flex-row md:gap-16">
					<li>
						<Link href={Routes.Portfolio}>Portfolio</Link>
					</li>
					<li>
						<Link href={Routes.About}>About Us</Link>
					</li>
					<li>
						<Link href={Routes.Contact}>Contact</Link>
					</li>
				</ul>
				<Link
					href={Routes.Portfolio}
					className={twMerge([
						buttonVariants({
							variant: "default",
							size: "lg",
						}),
						"text-lg mt-8 md:mt-0 md:absolute md:right-0 lg:right-8",
					])}
				>
					See Our Portfolio
					<MoveRightIcon className="ml-4" />
				</Link>
			</footer>
		</Container>
	);
};
