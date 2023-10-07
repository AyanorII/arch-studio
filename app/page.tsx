import { HeroProjects, SmallTeam, Welcome } from "@/pages/home/components";

export default function Home({
	searchParams,
}: {
	searchParams: {
		project?: string;
	};
}) {
	return (
		<main className="">
			<div className="relative flex min-h-[570px] flex-col">
				<HeroProjects projectQuery={searchParams.project} />
				<Welcome />
				<SmallTeam />
			</div>
		</main>
	);
}
