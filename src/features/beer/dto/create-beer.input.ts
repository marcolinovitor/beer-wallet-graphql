import { Field, InputType } from "@nestjs/graphql";
import { BeerDetailsInput } from "src/features/beer-details/dto/beer-details.input";

@InputType()
export class CreateBeerInput {
    @Field(() => String, { nullable: false })
    name: string;

    @Field(() => String, { nullable: false })
    userId: string;

    @Field(() => BeerDetailsInput, { nullable: false })
    beerDetails: BeerDetailsInput;
}