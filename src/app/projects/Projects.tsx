import React from "react";
import Project from "./Project";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const Projects = async () => {
	const projects = await prisma.project.findMany();
	return (
		<div className="w-full min-h-screen flex flex-col items-center justify-center space-y-5 mb-10">
			<h1 className="text-5xl mb-10">
				<span className="text-light-brand">Project</span> &{" "}
				<span className="text-light-secondBrand">Craft</span>
			</h1>
			{projects.map((project) => (
				<Project
					key={project.id}
					title={project.name}
					description={project.description}
					position={project.position}
					previewLink={project.link}
					githubLink={project.github}
					date={project.date}
					isCompleted={project.isCompleted}
				/>
			))}
		</div>
	);
};

export default Projects;
