const {PrismaClient} =require('@prisma/client')
const prisma = new PrismaClient()

async function run() {
  await prisma.$executeRawUnsafe('DROP Database my-project')
  await prisma.$executeRawUnsafe('CREATE Database my-project')
}
console.log('Reset DB')
run()