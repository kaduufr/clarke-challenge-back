import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prismaService: PrismaService) {}
  findAll(limit?: number, amountKWH?: number) {
    return this.prismaService.company.findMany({
      take: limit || undefined,
      where: {
        minLimitKWH: {
          gte: amountKWH || 0,
        },
      },
    });
  }
}
