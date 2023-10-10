import { Container } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ResponsiveImage as IResponsiveImage } from "@/lib/types";

export const Heritage = () => {
	const heritageImage: IResponsiveImage = {
		mobile: "/images/about/desktop/image-heritage.jpg",
		tablet: "/images/about/desktop/image-heritage.jpg",
		desktop: "/images/about/desktop/image-heritage.jpg",
	};

	return (
		<section className="mb-28 md:mb-56 lg:mb-52">
			<Container>
				<div className="mt-5 grid md:mt-28 lg:grid-cols-2 lg:gap-16 xl:gap-32">
					<div className="relative">
						<div className="mb-10 hidden w-16 border md:block" />
						<h2 className="mb-6 whitespace-pre-wrap text-5xl font-bold md:mb-16 md:text-7xl lg:mb-12">
							{"Our\nHeritage"}
						</h2>
						<div className="text-lg text-[#60636D]">
							<p>
								Founded in 2007, we started as a trio of architects. Our
								complimentary skills and relentless attention to detail turned
								Arch into one of the most sought after boutique firms in the
								country.
							</p>
							<br />
							<p>
								Speciliazing in Urban Design allowed us to focus on creating
								exceptional structures that live in harmony with their
								surroundings. We consider every detail from every surrounding
								element to inform our designs.
							</p>
							<br />
							<p>
								Our small team of world-class professionals provides input on
								every project.
							</p>
						</div>
					</div>
					<ResponsiveImage
						image={heritageImage}
						alt="Our Heritage"
						width={540}
						height={568}
						className="hidden h-full object-cover lg:block"
					/>
				</div>
			</Container>
		</section>
	);
};
