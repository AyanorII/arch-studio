import Link from "next/link";

import { Container, buttonVariants } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { MoveRightIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Routes } from "@/lib/constants";
import { FEATURED_PROJECTS } from "@/projects/constants";

export const Featured = () => {
	return (
		<section className="my-20">
			<Container className="">
				<div className="relative pb-24">
					<div className="mb-11 flex items-center justify-between">
						<h3 className="text-5xl font-bold">Featured</h3>
						<Link
							href={Routes.Portfolio}
							className={twMerge([
								buttonVariants({
									variant: "default",
									size: "lg",
								}),
								"absolute bottom-0 text-lg w-full md:static md:flex md:w-[170px]",
							])}
						>
							See All <MoveRightIcon className="ml-4" />
						</Link>
					</div>
					<div className="grid gap-6 lg:grid-cols-3">
						{FEATURED_PROJECTS.slice(0, 3).map(({ title, image }, index) => (
							<div
								key={title}
								className="relative flex h-[240px] w-full items-end lg:h-[560px]"
							>
								<span className="md hidden text-[250px] font-bold leading-none text-white opacity-50 md:absolute md:right-4 md:top-4 md:z-10 md:block lg:right-0">
									{index + 1}
								</span>
								<ResponsiveImage
									image={image}
									alt={title}
									fill
									className="object-cover brightness-50"
								/>
								<div className="relative p-6 text-white sm:p-8 md:p-10">
									<h4 className="text-3xl font-bold">{title}</h4>
									<p className="opacity-70">View All Projects</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
