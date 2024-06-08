const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	await prisma.stack.deleteMany();
	await prisma.project.deleteMany();
	await prisma.certification.deleteMany();

	await prisma.stack.createMany({
		data: [
			{
				name: "JavaScript",
				image: "js.png",
				category: "Programming Language",
			},
			{
				name: "TypeScript",
				image: "ts.png",
				category: "Programming Language",
			},
			{
				name: "PHP",
				image: "php.png",
				category: "Programming Language",
			},
			{
				name: "Java",
				image: "java.png",
				category: "Programming Language",
			},
			{
				name: "MySQL",
				image: "mysql.png",
				category: "Database",
			},
			{
				name: "PostgreSQL",
				image: "postgresql.png",
				category: "Database",
			},
			{
				name: "MongoDB",
				image: "mongodb.png",
				category: "Database",
			},
			{
				name: "Node.JS",
				image: "node.png",
				category: "Web Tech",
			},
			{
				name: "Laravel",
				image: "laravel.png",
				category: "Web Tech",
			},
			{
				name: "Express JS",
				image: "express.png",
				category: "Web Tech",
			},
			{
				name: "React JS",
				image: "react.png",
				category: "Web Tech",
			},
			{
				name: "Prisma",
				image: "prisma.png",
				category: "Web Tech",
			},
			{
				name: "Tailwind",
				image: "tailwind.png",
				category: "Web Tech",
			},
			{
				name: "Bootstrap",
				image: "bootstrap.png",
				category: "Web Tech",
			},
			{
				name: "Git",
				image: "git.png",
				category: "Tools",
			},
			{
				name: "Github",
				image: "github.png",
				category: "Tools",
			},
			{
				name: "Postman",
				image: "postman.png",
				category: "Tools",
			},
			{
				name: "NPM",
				image: "npm.png",
				category: "Tools",
			},
		],
	});

	await prisma.project.createMany({
		data: [
			{
				name: "Qtin",
				image: "https://example.com/images/website-development.png",
				description: "A project to develop a responsive website.",
				date: "2023-05-01",
				isCompleted: true,
			},
			{
				name: "Mobile App Development",
				image: "https://example.com/images/mobile-app-development.png",
				description:
					"A project to develop a cross-platform mobile application.",
				date: "2023-06-01",
				isCompleted: false,
			},
		],
	});

	await prisma.certification.createMany({
		data: [
			{
				name: "AWS Certified Solutions Architect",
				description: "Certification for designing distributed systems on AWS.",
				credentials: "https://example.com/credentials/aws-solutions-architect",
				stateDate: new Date("2023-01-01T00:00:00.000Z"),
				endDate: new Date("2024-01-01T00:00:00.000Z"),
				image: "https://example.com/images/aws-certification.png",
			},
			{
				name: "Google Cloud Professional Data Engineer",
				description:
					"Certification for building data processing systems on GCP.",
				credentials: "https://example.com/credentials/gcp-data-engineer",
				stateDate: new Date("2023-02-01T00:00:00.000Z"),
				endDate: new Date("2024-02-01T00:00:00.000Z"),
				image: "https://example.com/images/gcp-certification.png",
			},
		],
	});

	console.log("Database has been seeded.");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
