import Image from "next/image";
import Link from "next/link";

import { Routes } from "@/lib/constants";

import { Container } from "../ui";
import { MobileNav } from "./mobile-navbar";
import { NavLink } from "./nav-link";

export const Navbar = () => {
	return (
		<Container className="relative z-[100] border-b bg-white py-8">
			<div className="flex items-center justify-between lg:gap-24">
				<Link href={Routes.Home}>
					<Image
						src="/images/logo.svg"
						alt="Arch"
						width={77}
						height={32}
						className="md:h-10 md:w-24"
					/>
				</Link>
				<nav className="flex items-center md:grow">
					<div className="md:hidden">
						<MobileNav />
					</div>
					<div className="hidden md:flex md:grow md:justify-evenly lg:justify-start lg:gap-16">
						{Object.entries(Routes)
							.filter(([name]) => name !== "Home")
							.map(([name, path]) => (
								<NavLink key={path} href={path}>
									{name}
								</NavLink>
							))}
					</div>
				</nav>
			</div>
		</Container>
	);
};
