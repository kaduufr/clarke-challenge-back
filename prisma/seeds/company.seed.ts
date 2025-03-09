import { PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker/locale/pt_BR';

const prismaClient = new PrismaClient();

interface ICompanyMock {
  name: string;
  logo: string;
  totalClients: number;
  costKWH: number;
  minLimitKWH: number;
  totalRatings: number;
  sumRatings: number;
  regionId: number;
}

const mockCompany: ICompanyMock[] = [];

export async function seedCompany() {
  for (let i = 0; i < 20; i++) {
    const company = {
      name: faker.company.name(),
      logo: `https://mais-energia-bucket.s3.us-west-2.amazonaws.com/logo-empresa-1.jpg`,
      totalClients: faker.number.int({ min: 100, max: 5000 }),
      costKWH: faker.number.int({ min: 100, max: 1000 }),
      minLimitKWH: faker.number.int({ min: 50, max: 500 }),
      totalRatings: faker.number.int({ min: 0, max: 500 }),
      sumRatings: faker.number.float({ min: 1, max: 5, fractionDigits: 2 }),
      regionId: faker.number.int({ min: 1, max: 27 }),
    };

    mockCompany.push(company);
  }

  await prismaClient.company
    .createMany({
      data: mockCompany,
    })
    .then(() => {
      console.log('Empresas adicionadas com sucesso');
    });
}
