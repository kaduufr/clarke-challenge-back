import { Resolver, Query, Args, Int, Float } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Query(() => [Company], { name: 'company' })
  findAll(
    @Args('limit', { type: () => Int, nullable: true }) limit: number,
    @Args('amountKWH', { type: () => Float, nullable: true })
    amountKWH: number,
  ) {
    return this.companyService.findAll(limit, amountKWH);
  }
}
