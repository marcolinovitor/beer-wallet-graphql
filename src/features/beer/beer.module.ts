import { Module } from '@nestjs/common';
import { BeerService } from './beer.service';
import { BeerResolver } from './beer.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Beer } from './entities/beer.entity';
import { BeerDetailsModule } from '../beer-details/beer-details.module';

@Module({
  imports: [TypeOrmModule.forFeature([Beer]), BeerDetailsModule],
  providers: [BeerResolver, BeerService]
})
export class BeerModule {}
