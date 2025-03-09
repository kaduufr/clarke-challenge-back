import { PrismaClient } from "@prisma/client";
import process from 'node:process';
import { seedRegions } from './seeds/regions.seed';

const prismaClient = new PrismaClient()

async function main() {
  console.log('Rodando seeds...')
  
  // await seedRegions()
  
  console.log('Seeds rodados com sucesso!')
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prismaClient.$disconnect();
  });