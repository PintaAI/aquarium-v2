import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const testimonials = [
    {
      name: "Siti Nurhaliza",
      role: "Student",
      content: "Berkat PejuangKorea, saya berhasil mendapatkan pekerjaan impian di Seoul. Kursus bahasanya sangat membantu dan komunitasnya luar biasa supportif!",
    },
    {
      name: "Budi Santoso",
      role: "Professional",
      content: "Platform ini membantu saya beradaptasi dengan kehidupan di Korea. Saya menemukan teman-teman baru dan mendapatkan banyak tips berharga.",
    },
  ]

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    })
  }

  console.log('Seed data inserted successfully.')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })