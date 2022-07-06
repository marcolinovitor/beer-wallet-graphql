import { Field, Float, InputType, Int } from "@nestjs/graphql";
import { BeerTypeInput } from "src/features/beer-type/dto/beer-type.input";
import { LocationInput } from "src/features/locations/dto/location.input";

@InputType()
export class BeerDetailsInput {
    @Field(() => Float)
    rating: number;

    @Field(() => String)
    comments: string;

    @Field(() => Int)
    ibu: number;

    @Field(() => Float)
    bitterness: number;

    @Field(() => BeerTypeInput)
    beerType: BeerTypeInput;

    @Field(() => LocationInput)
    location: LocationInput;
}