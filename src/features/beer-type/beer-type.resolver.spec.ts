import { Test, TestingModule } from '@nestjs/testing';
import { BeerTypeResolver } from './beer-type.resolver';
import { BeerTypeService } from './beer-type.service';

describe('BeerTypeResolver', () => {
  let resolver: BeerTypeResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerTypeResolver, BeerTypeService],
    }).compile();

    resolver = module.get<BeerTypeResolver>(BeerTypeResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
