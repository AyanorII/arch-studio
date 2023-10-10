import { Container } from "@/components/ui";
import { ProjectList } from "@/projects/components";

import { PROJECTS } from "@/projects/constants";

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
