import { Field, ObjectType } from "@nestjs/graphql";
import { BeerDetails } from "../../beer-details/entities/beer-details.entity";
import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";


@Entity({ name: 'locations' })
@ObjectType()
export class Location {
    @PrimaryColumn('varchar', { unique: true, length: 3 })
    @Field(() => String)
    code: string;

    @Column('varchar', { length: 50 })
    @Field(() => String)
    description: string;

    @OneToMany(() => BeerDetails, (beerDetails) => beerDetails.id)
    @Field(() => BeerDetails)
    beerDetails: BeerDetails[];
}