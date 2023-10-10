import { ResponsiveImage } from "@/components/ui/ResponsiveImage";

import { FeaturedProject, Project } from "../types";

type Props = {
	projects: (Project | FeaturedProject)[];
};

export const ProjectList = ({ projects }: Props) => {
	return (
		<ul className="grid gap-6 lg:grid-cols-[repeat(auto-fit,_minmax(250px,1fr))] lg:gap-8 xl:lg:grid-cols-[repeat(auto-fit,_minmax(350px,1fr))]">
			{projects.map(({ title, image, releaseDate }) => (
				<li
					key={title}
					className="relative flex min-h-[240px] items-end lg:h-[560px]"
				>
					<div className="absolute inset-0 z-50 bg-gradient-to-b from-black/0 to-black/60" />
					<ResponsiveImage
						image={image}
						alt={title}
						fill
						className="object-cover"
					/>
					<div className="relative z-50 p-6 text-white lg:p-8">
						<p className="text-3xl font-bold drop-shadow-2xl">{title}</p>
						<time
							dateTime={releaseDate.toString()}
							className="text-lg opacity-75 drop-shadow-2xl"
						>
							{releaseDate.toLocaleDateString("en-US", {
								month: "long",
								year: "numeric",
							})}
						</time>
					</div>
				</li>
			))}
		</ul>
	);
};
