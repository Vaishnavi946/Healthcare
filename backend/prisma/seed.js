const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  await prisma.doctor.createMany({
    data: [
      { name: "Dr. Aarav Mehta", specialty: "Cardiologist", docId: "DOC101", email: "aarav@hospital.com", password: "pass123" },
      { name: "Dr. Riya Sharma", specialty: "Dermatologist", docId: "DOC102", email: "riya@hospital.com", password: "pass123" }
    ]
  });

  console.log("Seed Completed!");
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());
