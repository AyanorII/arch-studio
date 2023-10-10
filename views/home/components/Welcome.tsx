import Image from "next/image";

import { SectionHeading } from "@/components/pages/SectionHeading";
import { Container } from "@/components/ui";
import WelcomeImage from "@/public/images/home/desktop/image-welcome.jpg";

export const Welcome = () => {
	return (
		<section>
			<Container>
				<div className="relative mt-16 py-20 lg:mt-24">
					<div className="absolute left-0 top-0 h-[1px] w-16 bg-[#C8CCD8] md:hidden" />
					<span className="hidden text-9xl font-bold text-[#EEEFF4] md:-mb-4 md:block lg:absolute lg:-top-8 lg:text-[250px]">
						Welcome
					</span>
					<div className="flex gap-28 lg:justify-end">
						<div className="max-w-[60ch] lg:mt-24">
							<SectionHeading className="mb-5 leading-[52px]">
								{"Welcome to\nArch Studio"}
							</SectionHeading>
							<div className="text-lg text-[#60636D]">
								<p>
									We have a unique network and skillset to help bring your
									projects to life. Our small team of highly skilled individuals
									combined with our large network put us in a strong position to
									deliver exceptional results.
								</p>
								<br />
								<p>
									Over the past 10 years, we have worked on all kinds of
									projects. From stations to high-rise buildings, we create
									spaces that inspire and delight.
								</p>
								<br />
								<p>
									We work closely with our clients so that we understand the
									intricacies of each project. This allows us to work in harmony
									the surrounding area to create truly stunning projects that
									will stand the test of time.
								</p>
							</div>
						</div>
						<Image
							src={WelcomeImage}
							alt="Welcome"
							className="hidden lg:block"
						/>
					</div>
				</div>
			</Container>
		</section>
	);
};
