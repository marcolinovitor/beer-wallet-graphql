import { Module } from '@nestjs/common';
import { BeerDetailsService } from './beer-details.service';
import { BeerDetailsResolver } from './beer-details.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeerDetails } from './entities/beer-details.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BeerDetails])],
  providers: [BeerDetailsResolver, BeerDetailsService],
  exports: [BeerDetailsService]
})
export class BeerDetailsModule {}
