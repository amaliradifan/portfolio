import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function GithubButton({ link }: { link: string }) {
	return (
		<>
			<a
				href={"/google"}
				className="text-base rounded-3xl bg-light-invert px-5 py-1.5 text-light-primary hover:bg-light-brand hover:animate-wiggle"
			>
				<FontAwesomeIcon icon={faGithub} size="1x" /> Github
			</a>
		</>
	);
}

