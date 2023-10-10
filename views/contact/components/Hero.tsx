import { SectionHeading } from "@/components/pages/SectionHeading";
import { Container } from "@/components/ui";
import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ResponsiveImage as IResponsiveImage } from "@/lib/types";

export const ContactHero = () => {
	const heroImage: IResponsiveImage = {
		mobile: "/images/contact/mobile/image-hero.jpg",
		tablet: "/images/contact/tablet/image-hero.jpg",
		desktop: "/images/contact/desktop/image-hero.jpg",
	};

	return (
		<section>
			<Container className="p-0 md:px-8">
				<div className="relative lg:grid lg:grid-cols-2 xl:grid-cols-[1.5fr,_1fr]">
					<ResponsiveImage
						image={heroImage}
						alt="Contact"
						width={375}
						height={240}
						className="relative h-[240px] w-full brightness-50 md:h-[720px]"
					/>
					<div className="relative -top-12 w-[90%] bg-white pl-8 pt-20 md:absolute md:bottom-0 md:right-0 md:top-[unset] md:px-16 md:pt-40 lg:max-w-[60%] lg:pt-52 xl:pl-40">
						<span className="absolute -top-14 right-0 hidden text-9xl font-bold text-[#EEEFF4] md:block lg:-top-24 lg:text-[250px]">
							Contact
						</span>
						<div className="absolute left-8 hidden w-16 border md:bottom-[unset] md:left-16 md:top-20 md:block md:pb-0 lg:top-40 xl:left-40" />
						<SectionHeading as="h1" className="mb-5 md:mb-9">
							Tell us about your project
						</SectionHeading>
						<p className="text-lg text-[#60636D]">
							We’d love to hear more about your project. Please, leave a message
							below or give us a call. We have two offices, one in Texas and one
							in Tennessee. If you find yourself nearby, come say hello!
						</p>
						{/* </Container> */}
					</div>
				</div>
			</Container>
		</section>
	);
};
