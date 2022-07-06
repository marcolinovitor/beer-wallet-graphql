import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BeerDetailsService } from '../beer-details/beer-details.service';
import { CreateBeerInput } from './dto/create-beer.input';
import { Beer } from './entities/beer.entity';

@Injectable()
export class BeerService {

    constructor(
        @InjectRepository(Beer)
        private readonly beerRepository: Repository<Beer>,
        private readonly beerDetailsService: BeerDetailsService,
    ) { }

    findAll() {
        return this.beerRepository.find({ 
            relations: {
                beerDetails: {
                    beerType: true,
                    location: true,
                },
            }
         });
    }

    async create(data: CreateBeerInput) {
        const { id } = await this.beerDetailsService.createDetais(data.beerDetails);
        const beer = this.beerRepository.create({
            user: {
                id: data.userId
            },
            name: data.name,
            beerDetails: { id },
        });
        return this.beerRepository.save(beer);
    }
}

