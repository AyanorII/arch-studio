import { ResponsiveImage } from "@/lib/types";

export interface Project {
	image: ResponsiveImage;
	title: string;
	isFeatured: boolean;
	releaseDate: Date;
}

export interface FeaturedProject extends Project {
	description: string;
	heroImage: ResponsiveImage;
	isFeatured: true;
}
