import { Test, TestingModule } from '@nestjs/testing';
import { BeerDetailsResolver } from './beer-details.resolver';
import { BeerDetailsService } from './beer-details.service';

describe('BeerDetailsResolver', () => {
  let resolver: BeerDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerDetailsResolver, BeerDetailsService],
    }).compile();

    resolver = module.get<BeerDetailsResolver>(BeerDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
