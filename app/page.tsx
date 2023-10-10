import {
	Featured,
	HeroProjects,
	SmallTeam,
	Welcome,
} from "@/views/home/components";

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
				<Featured />
			</div>
		</main>
	);
}
