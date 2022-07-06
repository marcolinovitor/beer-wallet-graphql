import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { TYPE_ORM_CONFIG } from './config/type-orm.config';
import { HttpExceptionFilter } from './shared/exceptions/exception.handler';
import { UsersModule } from './features/users/users.module';
import { LocationsModule } from './features/locations/locations.module';
import { BeerTypeModule } from './features/beer-type/beer-type.module';
import { BeerDetailsModule } from './features/beer-details/beer-details.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(TYPE_ORM_CONFIG),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql')
    }),
    UsersModule,
    LocationsModule,
    BeerTypeModule,
    BeerDetailsModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter
    }
  ],
})
export class AppModule {}
