import { Metadata } from "next";

import { Container } from "@/components/ui";
import { ProjectList } from "@/projects/components";

import { PROJECTS } from "@/projects/constants";

export const metadata: Metadata = {
	title: "Portfolio | Arc Studio",
};

const PortfolioPage = () => {
	return (
		<Container>
			<div className="mb-20 mt-10">
				<ProjectList projects={PROJECTS} />
			</div>
		</Container>
	);
};

export default PortfolioPage;
