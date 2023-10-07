import Image, { ImageProps } from "next/image";

import { ResponsiveImage as IResponsiveImage } from "@/lib/types";

type Props = {
	image: IResponsiveImage;
} & Omit<ImageProps, "src">;

export const ResponsiveImage = ({ image, ...props }: Props) => {
	const { mobile, tablet, desktop } = image;

	return (
		<picture>
			<source srcSet={mobile} media="(max-width: 768px)" />
			<source srcSet={tablet} media="(max-width: 1024px)" />
			<Image src={desktop} {...props} />
		</picture>
	);
};
