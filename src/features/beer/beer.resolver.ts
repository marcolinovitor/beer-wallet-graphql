import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { BeerService } from './beer.service';
import { CreateBeerInput } from './dto/create-beer.input';
import { Beer } from './entities/beer.entity';

@Resolver(() => Beer)
export class BeerResolver {
  constructor(private readonly beerService: BeerService) {}

  @Query(() => [Beer], { name: 'beers' })
  findAll() {
    return this.beerService.findAll();
  }

  @Mutation(() => Beer, { name: 'beer' })
  create(
    @Args('data', { type: () => CreateBeerInput }) data: CreateBeerInput 
  ) {
    return this.beerService.create(data);
  }
}
