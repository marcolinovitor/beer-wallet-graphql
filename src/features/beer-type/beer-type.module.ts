import { Module } from '@nestjs/common';
import { BeerTypeService } from './beer-type.service';
import { BeerTypeResolver } from './beer-type.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BeerType } from './entities/beer-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([BeerType])],
  providers: [BeerTypeResolver, BeerTypeService]
})
export class BeerTypeModule {}
