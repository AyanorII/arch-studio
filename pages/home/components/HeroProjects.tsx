import Link from "next/link";

import { Container, buttonVariants } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { MoveRightIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Routes } from "@/lib/constants";
import { FEATURED_PROJECTS } from "@/projects/constants";

type Props = {
	projectQuery?: string;
};

export const HeroProjects = ({ projectQuery }: Props) => {
	const activeIndex = projectQuery
		? FEATURED_PROJECTS.findIndex(
				(project) => project.title === decodeURIComponent(projectQuery)
		  )
		: 0;

	return (
		<section>
			<Container className="relative p-0">
				<div className="flex overflow-hidden">
					{FEATURED_PROJECTS.map(({ title, description, heroImage }) => (
						<div
							key={title}
							className={twMerge([
								"w-full shrink-0 py-28 px-8 relative md:px-16 md:py-44 lg:px-32 lg:py-48 transition-transform duration-1000",
								`-translate-x-[${activeIndex}00%]`,
							])}
						>
							<ResponsiveImage
								image={heroImage}
								alt={title}
								fill
								className="object-cover brightness-[.45]"
							/>
							<div className="relative text-white">
								<h2 className="mb-3 whitespace-pre-wrap text-5xl font-bold md:text-8xl">
									{title}
								</h2>
								<p className="mb-20 text-lg shadow-lg sm:max-w-[80%] md:mb-10 md:max-w-[65%] lg:max-w-[50%]">
									{description}
								</p>
								<Link
									href={Routes.Portfolio}
									className={twMerge([
										buttonVariants({
											variant: "default",
											size: "lg",
										}),
										"text-lg",
									])}
								>
									See Our Portfolio
									<MoveRightIcon className="ml-4" />
								</Link>
							</div>
						</div>
					))}
				</div>
				<div className="flex md:absolute md:-left-20 md:bottom-0">
					{FEATURED_PROJECTS.map((project, index) => (
						<Link
							key={project.title}
							href={{
								query: {
									project: encodeURIComponent(project.title),
								},
							}}
							className={twMerge([
								buttonVariants({
									variant: "default",
								}),
								"h-20 w-20 text-lg transition-all hover:bg-[#EEEFF4]",
								activeIndex !== index && "text-[#7D828F] bg-white",
							])}
						>
							{String(index + 1).padStart(2, "0")}
						</Link>
					))}
				</div>
			</Container>
		</section>
	);
};
