import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RegionService } from './region.service';
import { Region } from './entities/region.entity';

@Resolver(() => Region)
export class RegionResolver {
  constructor(private readonly regionService: RegionService) {}

  @Query(() => [Region], { name: 'region' })
  findAll() {
    return this.regionService.findAll();
  }

}
