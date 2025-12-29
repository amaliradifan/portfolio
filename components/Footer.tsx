import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";
export default function Footer() {
	return (
		<div className="w-full flex justify-center h-16 items-center">
			<div className="w-5/6 flex items-center">
				<FontAwesomeIcon icon={faCopyright} />
				<h3 className="inline ml-1">
					• Muhammad Amali Radifan - All Right Reserved
				</h3>
				<div className="ml-auto flex gap-8">
					<a href="" className="hover:animate-wiggle hover:text-light-brand">
						About
					</a>
					<span>|</span>
					<a href="" className="hover:animate-wiggle hover:text-light-brand">
						Project
					</a>
					<span>|</span>
					<a href="" className="hover:animate-wiggle hover:text-light-brand">
						Contact
					</a>
				</div>
			</div>
		</div>
	);
}

