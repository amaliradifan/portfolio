import "dotenv/config";
import { PrismaClient } from "@prisma/client";
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
        name: "Operational Management System",
        image: "https://example.com/images/neo-indo-elektrik.png",
        description:
          "An internal system developed to support and simplify operational workflows within an organization. This project focuses on organizing daily administrative activities into a structured digital process, helping reduce manual work and improve consistency across operations. By centralizing data and workflows, the system assists teams in managing operational tasks more efficiently, improving coordination, and maintaining clearer records for long-term use.",
        date: "2025-12",
        isCompleted: true,
      },
      {
        name: "Levi Camp – Camp Reservation Platform",
        image: "https://example.com/images/levi-camp.png",
        description:
          "A web-based reservation platform designed to manage booking activities and scheduling for a camp facility. The system provides a centralized solution to handle reservations, availability, and basic booking management in an organized manner. This project aims to improve the overall reservation experience for both administrators and users by offering clearer scheduling information and a more structured approach to managing reservations.",
        date: "2025-07",
        isCompleted: true,
      },
      {
        name: "Perkampungan Budaya Betawi Setu Babakan",
        image: "https://example.com/images/setu-babakan.png",
        description:
          "A web application built to support the management of activities, events, and operational needs of a cultural tourism area. The system helps organize information related to events and facilities in a more accessible digital format. This project was developed to improve coordination between administrators and visitors while supporting the long-term management and promotion of cultural activities through a centralized platform.",
        date: "2025-06",
        isCompleted: true,
      },
      {
        name: "QTin",
        image: "https://example.com/images/qtin.png",
        description:
          "A digital platform developed to support food and beverage business operations, including menu management and order processing. The system helps organize product information and manage customer orders in a more structured and efficient way. By centralizing menu data and order workflows, this project supports smoother daily operations while providing a solid foundation for future feature expansion and system integration.",
        date: "2024-12",
        isCompleted: true,
      },
      {
        name: "Android Portal",
        image: "https://example.com/images/android-portal.png",
        description:
          "An internal portal system created to support organizational workflows and internal information management. The platform serves as a centralized access point for operational data, helping teams coordinate tasks and access relevant information more efficiently. This project focuses on improving internal organization by providing a structured digital solution that supports day-to-day operational needs.",
        date: "2024-11",
        isCompleted: true,
      },
      {
        name: "Grantify",
        image: "https://example.com/images/grantify.png",
        description:
          "A backend service developed to support a mobile application by providing reliable data handling and system integration. The project focuses on ensuring consistent communication between application components and maintaining a clean, structured backend foundation. This system was designed to support future development needs while keeping the overall architecture simple and maintainable.",
        date: "2024-06",
        isCompleted: true,
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
