"use client";

import Link from "next/link";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

import { Routes } from "@/lib/constants";

import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";

export const MobileNav = () => {
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	if (typeof window !== "undefined" && window.screen.width >= 768) return <></>;

	return (
		<Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
			<DialogTrigger>
				{isDialogOpen ? (
					<AiOutlineClose className="h-6 w-6" />
				) : (
					<RxHamburgerMenu className="h-6 w-6" />
				)}
			</DialogTrigger>
			<DialogContent className="inset-x-0 top-24 flex w-full max-w-none translate-x-0 translate-y-0 flex-col gap-4 bg-[#EEEFF4] px-10 py-12 data-[state=closed]:slide-out-to-right-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-right-1/2 data-[state=open]:slide-in-from-top-[48%] [&>button]:hidden">
				{Object.entries(Routes)
					.filter(([name]) => name !== "Home")
					.map(([name, path]) => (
						<Link
							key={path}
							href={path}
							className="text-3xl font-bold text-[#1B1D23]"
						>
							{name}
						</Link>
					))}
			</DialogContent>
		</Dialog>
	);
};
