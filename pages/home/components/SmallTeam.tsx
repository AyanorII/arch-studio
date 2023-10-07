import Link from "next/link";

import { Container, buttonVariants } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ResponsiveImage as IResponsiveImage } from "@/lib/types";
import { MoveRightIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";

import { Routes } from "@/lib/constants";

export const SmallTeam = () => {
	const backgroundImage: IResponsiveImage = {
		mobile: "/images/home/mobile/image-small-team.jpg",
		tablet: "/images/home/tablet/image-small-team.jpg",
		desktop: "/images/home/desktop/image-small-team.jpg",
	};

	return (
		<section className="lg:mt-20 ">
			<Container>
				<div className="relative px-8 py-40 md:px-16 lg:px-48">
					<ResponsiveImage
						image={backgroundImage}
						alt="Small team, big ideas"
						fill
						className="object-cover brightness-50"
					/>
					<div className="relative">
						<h3 className="mb-6 whitespace-pre-wrap text-5xl font-bold text-white md:text-7xl ">
							{"Small team\nbig ideas"}
						</h3>
						<Link
							href={Routes.About}
							className={twMerge([
								buttonVariants({
									variant: "default",
									size: "lg",
								}),
								"text-lg",
							])}
						>
							About Us
							<MoveRightIcon className="ml-4" />
						</Link>
					</div>
				</div>
			</Container>
		</section>
	);
};
