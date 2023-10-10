import { Metadata } from "next";

import { AboutHero, Heritage, Leaders } from "@/views/about/components";

export const metadata: Metadata = {
	title: "About Us | Arch Studio",
};

const AboutPage = () => {
	return (
		<div>
			<AboutHero />
			<Heritage />
			<Leaders />
		</div>
	);
};

export default AboutPage;
