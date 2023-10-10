import { ResponsiveImage } from "@/components/ui/ResponsiveImage";
import { ResponsiveImage as IResponsiveImage } from "@/lib/types";

export const Map = () => {
	const mapImage: IResponsiveImage = {
		mobile: "/images/contact/mobile/image-map.png",
		tablet: "/images/contact/tablet/image-map.png",
		desktop: "/images/contact/desktop/image-map.png",
	};

	return (
		<ResponsiveImage image={mapImage} alt="Map" fill className="object-cover" />
	);
};
