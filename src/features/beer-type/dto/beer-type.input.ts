import { Field, InputType, Int } from "@nestjs/graphql";

@InputType()
export class BeerTypeInput {
    @Field(() => Int)
    id: number;
}