import { Test, TestingModule } from '@nestjs/testing';
import { BeerTypeService } from './beer-type.service';

describe('BeerTypeService', () => {
  let service: BeerTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BeerTypeService],
    }).compile();

    service = module.get<BeerTypeService>(BeerTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
