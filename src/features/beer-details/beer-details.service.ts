import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BeerDetailsInput } from './dto/beer-details.input';
import { BeerDetails } from './entities/beer-details.entity';

@Injectable()
export class BeerDetailsService {

    constructor(
        @InjectRepository(BeerDetails)
        private readonly beerDetailsRepository: Repository<BeerDetails>
    ) { }

    createDetais(data: BeerDetailsInput) {
        const details = this.beerDetailsRepository.create({
            ...data,
            location: {
                code: data.location.code
            },
            beerType: {
                id: data.beerType.id
            }
        });
        return this.beerDetailsRepository.save(details);
    }
}
