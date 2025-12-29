import React from "react";
import Stack from "./stack";

export default function About() {
	return (
		<>
			<div
				id="about"
				className="w-5/6 min-h-screen flex flex-col text-xl space-y-5 leading-relaxed mt-10"
			>
				<h1 className="text-5xl mb-10">About Radifan</h1>
				<p>
					<span className="text-light-second-brand">
						BackEnd Developer and Full-Stack Developer enthusiast.
					</span>{" "}
					Always influenced by design. Based in Jakarta, Indonesia.
				</p>
				<p>
					I am an{" "}
					<span className="text-light-second-brand">Information Systems</span>{" "}
					student at UPN &quot;Veteran&quot; Jakarta, inspired by a strong
					motivation to become a{" "}
					<span className="text-light-second-brand">
						BackEnd or Full-Stack Developer
					</span>
					. My learning journey has provided me with a solid foundation in
					system development and programming. My goal is to create efficient,
					scalable, and secure applications that meet user needs and contribute
					to the technological advancements in the industry. Through my
					projects, I am gaining practical experience in{" "}
					<span className="text-light-second-brand">web development</span>,
					preparing myself for a successful career in the tech field.
				</p>
				<p>
					Exploring my world of turning challenges into new comfort zones! and I
					am a Web Developer with a passion for pushing my limits. Over the past
					3 years, I&apos;ve been learning the ins and outs of{" "}
					<span className="text-light-second-brand">web development</span> with
					frameworks like <span className="text-light-third-brand">Next.js</span>
					, <span className="text-light-third-brand">laravel</span> and{" "}
					<span className="text-light-third-brand">express</span>. To support
					backend development, I also study databases such as{" "}
					<span className="text-light-third-rand">MySQL</span>,{" "}
					<span className="text-light-third-brand">PostgreSQL</span>, and{" "}
					<span className="text-light-third-brand">MongoDB</span>. My focus is on
					mastering web technologies and delivering high-quality web
					applications.
				</p>
				<p>
					Currently, I am working as a Backend Developer at{" "}
					<span>
						<a
							href="https://nirmatech.id"
							className="text-light-brand transition-all duration-300 rounded-3xl hover:bg-light-brand hover:text-light-primary p-1 px-2"
						>
							Nirmatech
						</a>
					</span>
					, a mini startup with my team, allowing me to apply my skills in
					building robust and scalable backend applications.
				</p>
			</div>
			<Stack />
		</>
	);
}

