const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


async function main() {
  // Clear existing data
  await prisma.stack.deleteMany();
  await prisma.project.deleteMany();
  await prisma.certification.deleteMany();

  // Seed data for Stack
  await prisma.stack.createMany({
    data: [
      {
        name: 'JavaScript',
        image: 'https://example.com/images/javascript.png',
      },
      {
        name: 'TypeScript',
        image: 'https://example.com/images/typescript.png',
      },
    ],
  });

  // Seed data for Project
  await prisma.project.createMany({
    data: [
      {
        name: 'Website Development',
        image: 'https://example.com/images/website-development.png',
        description: 'A project to develop a responsive website.',
        date: '2023-05-01',
        isCompleted: true,
      },
      {
        name: 'Mobile App Development',
        image: 'https://example.com/images/mobile-app-development.png',
        description: 'A project to develop a cross-platform mobile application.',
        date: '2023-06-01',
        isCompleted: false,
      },
    ],
  });

  // Seed data for Certification
  await prisma.certification.createMany({
    data: [
      {
        name: 'AWS Certified Solutions Architect',
        description: 'Certification for designing distributed systems on AWS.',
        credentials: 'https://example.com/credentials/aws-solutions-architect',
        stateDate: new Date('2023-01-01T00:00:00.000Z'),
        endDate: new Date('2024-01-01T00:00:00.000Z'),
        image: 'https://example.com/images/aws-certification.png',
      },
      {
        name: 'Google Cloud Professional Data Engineer',
        description: 'Certification for building data processing systems on GCP.',
        credentials: 'https://example.com/credentials/gcp-data-engineer',
        stateDate: new Date('2023-02-01T00:00:00.000Z'),
        endDate: new Date('2024-02-01T00:00:00.000Z'),
        image: 'https://example.com/images/gcp-certification.png',
      },
    ],
  });

  console.log('Database has been seeded.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
