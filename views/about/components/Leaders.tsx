import Link from "next/link";

import { SectionHeading } from "@/components/pages/SectionHeading";
import { Container } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { LinkedinIcon, TwitterIcon } from "lucide-react";

import { LEADERS } from "../constants";

export const Leaders = () => {
	return (
		<section className="mb-28 lg:mb-40">
			<Container>
				<div className="lg:grid 2xl:grid-cols-[auto,_1fr] 2xl:gap-48">
					<SectionHeading className="mb-14">{"The\nLeaders"}</SectionHeading>
					<ul className="grid grid-cols-[repeat(auto-fit,_minmax(280px,1fr))] gap-20 sm:gap-x-4 sm:gap-y-16">
						{LEADERS.map(({ name, title, image }) => (
							<li key={name}>
								<div>
									<div className="group relative">
										<ResponsiveImage
											image={image}
											alt={name}
											width={311}
											height={284}
											className="aspect-square h-[284px] w-full object-cover"
										/>
										<div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
										<div className="absolute left-1/2 top-1/2 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-2 text-white opacity-0 group-hover:opacity-100">
											<Link href="#" className="p-2">
												<LinkedinIcon width={35} height={35} />
											</Link>
											<Link href="#" className="p-2">
												<TwitterIcon width={35} height={35} />
											</Link>
										</div>
									</div>
									<h3 className="mt-4 text-3xl font-bold">{name}</h3>
									<p className="text-lg">{title}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	);
};
