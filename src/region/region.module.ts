import { Module } from '@nestjs/common';
import { RegionService } from './region.service';
import { RegionResolver } from './region.resolver';
import { PrismaService } from '../shared/services/prisma.service';

@Module({
  providers: [RegionResolver, RegionService, PrismaService],
})
export class RegionModule {}
