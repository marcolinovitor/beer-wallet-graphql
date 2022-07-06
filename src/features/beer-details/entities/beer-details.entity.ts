import { Field, Float, Int, ObjectType } from "@nestjs/graphql";
import { BeerType } from "../../beer-type/entities/beer-type.entity";
import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Location } from "../../locations/entities/location.entity";

@Entity({ name: 'beer_details' })
@ObjectType()
export class BeerDetails {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    id: number;

    @Column('float', { nullable: false })
    @Field(() => Float)
    rating: number;

    @Column('varchar')
    @Field(() => String)
    comments: string;

    @Column('integer', { nullable: false })
    @Field(() => Int)
    ibu: number;

    @Column('float', { nullable: false })
    @Field(() => Float)
    bitterness: number;

    @ManyToOne(() => BeerType, (beerType) => beerType.id)
    @Field(() => BeerType)
    beerType: BeerType;

    @ManyToOne(() => Location, (location) => location.code)
    @Field(() => Location)
    location: Location;
}