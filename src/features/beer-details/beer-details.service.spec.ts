import { Test, TestingModule } from '@nestjs/testing';
import { BeerDetailsService } from './beer-details.service';

describe('BeerDetailsService', () => {
  let service: BeerDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerDetailsService],
    }).compile();

    service = module.get<BeerDetailsService>(BeerDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
