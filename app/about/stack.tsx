import React from "react";
import TechStackMarquee from "@/components/TechStackMarquee";

export default function Stack() {
	return (
		<div className="w-full min-h-screen flex flex-col items-center space-y-5 mb-10">
			<h1 className="text-5xl mb-10">
				<span className="text-light-brand">Tech Stack</span> &{" "}
				<span className="text-light-second-brand">Tools</span>
			</h1>
			<TechStackMarquee />
		</div>
	);
}

