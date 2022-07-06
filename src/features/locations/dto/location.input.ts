import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class LocationInput {
    @Field(() => String)
    code: string;
}