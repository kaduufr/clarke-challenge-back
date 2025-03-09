import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Region } from '../../region/entities/region.entity';

@ObjectType()
export class Company {
  @Field(() => Int)
  id: number;
  
  @Field()
  name: string;
  
  @Field()
  logo: string;
  
  @Field(() => Int)
  totalClients: number;
  
  @Field(() => Float)
  costKWH: number;
  
  @Field(() => Float)
  minLimitKWH: number;
  
  @Field(() => Int)
  totalRatings: number;
  
  @Field(() => Float)
  sumRatings: number;
  
  @Field(() => Int)
  regionId: number;
  
  @Field(() => Region)
  region: Region;

  @Field()
  createdAt: Date;
  
  @Field()
  updatedAt: Date;
}
