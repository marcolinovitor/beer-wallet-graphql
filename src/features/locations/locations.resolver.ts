import { Args, Query, Resolver } from '@nestjs/graphql';
import { Location } from './entities/location.entity';
import { LocationsService } from './locations.service';

@Resolver(() => Location)
export class LocationsResolver {
  constructor(private readonly locationsService: LocationsService) {}

  @Query(() => [Location], { name: 'locations' })
  findAll() {
    return this.locationsService.findAll();
  }

  @Query(() => Location, { name: 'location' })
  findByCode(
    @Args('code', { type: () => String }) code: string
  ) {
    return this.locationsService.findByCode(code);
  }
}
