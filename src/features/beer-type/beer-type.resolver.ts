import { Query, Resolver } from '@nestjs/graphql';
import { BeerTypeService } from './beer-type.service';
import { BeerType } from './entities/beer-type.entity';

@Resolver(() => BeerType)
export class BeerTypeResolver {
  constructor(private readonly beerTypeService: BeerTypeService) {}

  @Query(() => [BeerType], { name: 'beerTypes' })
  findAll() {
    return this.beerTypeService.findAll();
  }
}
