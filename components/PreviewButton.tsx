import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function PreviewButton({ link }: { link: string }) {
	return (
		<>
			<a
				href={link}
				className="text-base rounded-3xl bg-light-invert px-5 py-1.5 text-light-primary hover:bg-light-brand hover:animate-wiggle"
			>
				<FontAwesomeIcon icon={faLink} size="1x" /> Preview
			</a>
		</>
	);
}

