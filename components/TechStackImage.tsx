"use client";
import React from "react";

interface TechStackImageProps {
	imageUrl: string;
	altText: string;
	placeholderImage: string;
}

const TechStackImage: React.FC<TechStackImageProps> = ({
	imageUrl,
	altText,
	placeholderImage,
}) => {
	const [imageSrc, setImageSrc] = React.useState<string>(imageUrl);

	const handleImageError = () => {
		setImageSrc(placeholderImage);
	};

	return (
		<img
			src={imageSrc}
			alt={altText}
			className="w-52 hover:scale-125 transition-all duration-400"
			onError={handleImageError}
		/>
	);
};

export default TechStackImage;

