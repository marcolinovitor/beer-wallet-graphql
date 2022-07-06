import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BeerDetails } from "../../beer-details/entities/beer-details.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'beer_types' })
@ObjectType()
export class BeerType {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    id: number;

    @Column('varchar', { unique: true, length: 40 })
    @Field(() => String)
    description: string;

    @OneToMany(() => BeerDetails, (beerDetails) => beerDetails.id, { lazy: true })
    beerDetails: BeerDetails[];
}