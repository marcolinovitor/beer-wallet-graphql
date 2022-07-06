import { Test, TestingModule } from '@nestjs/testing';
import { BeerResolver } from './beer.resolver';
import { BeerService } from './beer.service';

describe('BeerResolver', () => {
  let resolver: BeerResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerResolver, BeerService],
    }).compile();

    resolver = module.get<BeerResolver>(BeerResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
