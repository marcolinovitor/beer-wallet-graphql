import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BeerType } from './entities/beer-type.entity';

@Injectable()
export class BeerTypeService {

    constructor(
        @InjectRepository(BeerType)
        private readonly beerTypeRepository: Repository<BeerType>
    ) { }

    findAll() {
        return this.beerTypeRepository.find({ cache: true });
    }
}
