import { Resolver } from '@nestjs/graphql';
import { BeerDetailsService } from './beer-details.service';

@Resolver()
export class BeerDetailsResolver {
  constructor(private readonly beerDetailsService: BeerDetailsService) {}
}
