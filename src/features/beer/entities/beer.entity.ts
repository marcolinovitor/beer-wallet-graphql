import { Field, Int, ObjectType } from "@nestjs/graphql";
import { BeerDetails } from "../../beer-details/entities/beer-details.entity";
import { User } from "../../users/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'beers' })
@ObjectType()
export class Beer {
    @PrimaryGeneratedColumn('increment')
    @Field(() => Int)
    id: number;

    @Column('varchar', { nullable: false, length: 20 })
    @Field(() => String, { nullable: false })
    name: string;

    @CreateDateColumn({ name: 'created_at' })
    @Field(() => Date, { defaultValue: new Date() })
    createdAt: Date;

    @ManyToOne(() => User, (user) => user.id)
    user: User;

    @OneToOne(() => BeerDetails)
    @JoinColumn()
    @Field(() => BeerDetails, { nullable: false })
    beerDetails: BeerDetails;
}