import { SectionHeading } from "@/components/pages/SectionHeading";
import { Container } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ResponsiveImage as IResponsiveImage } from "@/lib/types";

export const AboutHero = () => {
	const heroImage: IResponsiveImage = {
		mobile: "/images/about/mobile/image-hero.jpg",
		tablet: "/images/about/tablet/image-hero.jpg",
		desktop: "/images/about/desktop/image-hero.jpg",
	};

	return (
		<section>
			<Container className="p-0 md:px-8">
				<div className="relative pb-16 lg:grid lg:grid-cols-2 xl:grid-cols-[1.5fr,_1fr]">
					<ResponsiveImage
						image={heroImage}
						alt="About us"
						width={375}
						height={240}
						className="relative h-[240px] w-full brightness-50 md:h-[720px]"
					/>
					<div className="relative -top-12 w-[90%] bg-white pb-16 pl-8 pt-20 md:absolute md:bottom-0 md:right-0 md:top-[unset] md:px-16 md:pt-40 lg:max-w-[60%] lg:pt-52 xl:pl-40">
						<span className="absolute -top-14 right-0 hidden text-9xl font-bold text-[#EEEFF4] md:block lg:-top-24 lg:text-[250px]">
							About
						</span>
						<div className="absolute bottom-0 left-8 w-16 border md:bottom-[unset] md:left-16 md:top-20 md:pb-0 lg:top-40 xl:left-40" />
						<SectionHeading as="h1" className="mb-5 md:mb-9">
							Your team of professionals
						</SectionHeading>
						<p className="text-lg text-[#60636D]">
							Our small team of world-class professionals will work with you
							every step of the way. Strong relationships are at the core of
							everything we do. This extends to the relationship our projects
							have with their surroundings.
						</p>
						{/* </Container> */}
					</div>
				</div>
			</Container>
		</section>
	);
};
