import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType() // => Tell that it is a schema of Book
export class Book {
    @Field((type) => Int)
    id: number;

    @Field()
    title: string;

    // @Field((type) => Int, { nullable: true }) // { nullable: true } => not required field.
    // price: number;

    @Field((type) => Int)
    price: number;
}