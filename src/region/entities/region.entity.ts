import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Region {
  @Field(() => Int)
  id: number;
  
  @Field()
  name: string;
  
  @Field()
  uf: string;
  
  @Field()
  createdAt: Date;
  
  @Field()
  updatedAt: Date;
}
