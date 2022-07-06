import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Location } from './entities/location.entity';

@Injectable()
export class LocationsService {

    constructor(
        @InjectRepository(Location)
        private readonly locationRepository: Repository<Location>
    ) { }

    findAll() {
        return this.locationRepository.find({ cache: true });
    }

    async findByCode(code: string) {
        const location = await this.locationRepository.findOne({ 
            where: { code },
            cache: true,
        });
        if (!location) {
            throw new NotFoundException('Location not found.')
        }

        return location;
    }
}
