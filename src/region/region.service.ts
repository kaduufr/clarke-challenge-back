import { Injectable } from '@nestjs/common';
import { PrismaService } from '../shared/services/prisma.service';
import { PrismaPromise, Region } from '@prisma/client';

@Injectable()
export class RegionService {
  
  constructor(private prismaService: PrismaService) {}
  
  findAll(): PrismaPromise<Region[]> {
    return this.prismaService.region.findMany();
  }

}
