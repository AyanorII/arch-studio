import { FeaturedProject, Project } from "../types";

export const PROJECTS: (Project | FeaturedProject)[] = [
	{
		title: "Project Paramour",
		description:
			"Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.",
		isFeatured: true,
		releaseDate: new Date(2008, 1, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-paramour.jpg",
			tablet: "/images/portfolio/tablet/image-paramour.jpg",
			desktop: "/images/portfolio/desktop/image-paramour.jpg",
		},
		heroImage: {
			mobile: "/images/home/mobile/image-hero-paramour.jpg",
			tablet: "/images/home/tablet/image-hero-paramour.jpg",
			desktop: "/images/home/desktop/image-hero-paramour.jpg",
		},
	},
	{
		title: "Seraph Station",
		description:
			"The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.",
		isFeatured: true,
		releaseDate: new Date(2019, 8, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-seraph.jpg",
			tablet: "/images/portfolio/tablet/image-seraph.jpg",
			desktop: "/images/portfolio/desktop/image-seraph.jpg",
		},
		heroImage: {
			mobile: "/images/home/mobile/image-hero-seraph.jpg",
			tablet: "/images/home/tablet/image-hero-seraph.jpg",
			desktop: "/images/home/desktop/image-hero-seraph.jpg",
		},
	},
	{
		title: "Federal II Tower",
		description:
			"A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.",
		isFeatured: true,
		releaseDate: new Date(2017, 2, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-federal.jpg",
			tablet: "/images/portfolio/tablet/image-federal.jpg",
			desktop: "/images/portfolio/desktop/image-federal.jpg",
		},
		heroImage: {
			mobile: "/images/home/mobile/image-hero-federal.jpg",
			tablet: "/images/home/tablet/image-hero-federal.jpg",
			desktop: "/images/home/desktop/image-hero-federal.jpg",
		},
	},
	{
		title: "Trinity Bank Tower",
		description:
			"Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.",
		isFeatured: true,
		releaseDate: new Date(2010, 8, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-trinity.jpg",
			tablet: "/images/portfolio/tablet/image-trinity.jpg",
			desktop: "/images/portfolio/desktop/image-trinity.jpg",
		},
		heroImage: {
			mobile: "/images/home/mobile/image-hero-trinity.jpg",
			tablet: "/images/home/tablet/image-hero-trinity.jpg",
			desktop: "/images/home/desktop/image-hero-trinity.jpg",
		},
	},
	{
		title: "Project Del Sol",
		isFeatured: false,
		releaseDate: new Date(2016, 0, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-del-sol.jpg",
			tablet: "/images/portfolio/tablet/image-del-sol.jpg",
			desktop: "/images/portfolio/desktop/image-del-sol.jpg",
		},
	},
	{
		title: "Le Prototype",
		isFeatured: false,
		releaseDate: new Date(2015, 9, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-prototype.jpg",
			tablet: "/images/portfolio/tablet/image-prototype.jpg",
			desktop: "/images/portfolio/desktop/image-prototype.jpg",
		},
	},
	{
		title: "228B Tower",
		isFeatured: false,
		releaseDate: new Date(2015, 3, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-228b.jpg",
			tablet: "/images/portfolio/tablet/image-228b.jpg",
			desktop: "/images/portfolio/desktop/image-228b.jpg",
		},
	},
	{
		title: "Grand Edelweiss Hotel",
		isFeatured: false,
		releaseDate: new Date(2013, 11, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-edelweiss.jpg",
			tablet: "/images/portfolio/tablet/image-edelweiss.jpg",
			desktop: "/images/portfolio/desktop/image-edelweiss.jpg",
		},
	},
	{
		title: "Netcry Tower",
		isFeatured: false,
		releaseDate: new Date(2012, 7, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-netcry.jpg",
			tablet: "/images/portfolio/tablet/image-netcry.jpg",
			desktop: "/images/portfolio/desktop/image-netcry.jpg",
		},
	},
	{
		title: "Hypers",
		isFeatured: false,
		releaseDate: new Date(2012, 0, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-hypers.jpg",
			tablet: "/images/portfolio/tablet/image-hypers.jpg",
			desktop: "/images/portfolio/desktop/image-hypers.jpg",
		},
	},
	{
		title: "SXIV Tower",
		isFeatured: false,
		releaseDate: new Date(2011, 2, 1),
		image: {
			mobile: "/images/portfolio/mobile/image-sxiv.jpg",
			tablet: "/images/portfolio/tablet/image-sxiv.jpg",
			desktop: "/images/portfolio/desktop/image-sxiv.jpg",
		},
	},
];

export const FEATURED_PROJECTS = PROJECTS.filter(
	(project) => project.isFeatured
) as FeaturedProject[];
