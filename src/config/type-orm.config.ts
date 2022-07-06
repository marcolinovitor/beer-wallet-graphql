import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import * as dotenv from 'dotenv';
dotenv.config();

export const TYPE_ORM_CONFIG: TypeOrmModuleOptions = {
    type: 'mysql',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true,
    synchronize: process.env.NODE_ENV === 'development',
};