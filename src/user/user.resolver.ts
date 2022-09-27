import { Resolver, Query } from "@nestjs/graphql";

@Resolver()
export class UserResolver {
  constructor() {}

  @Query(() => String)
  sayHello(): string {
    return "hello world";
  }

}
