import { Resolver, Query } from '@nestjs/graphql';
import { Book } from './book.schema';

@Resolver((of) => Book)
export class BookResolver {
  @Query(() => String)
  getAllBooks(): string {
    return 'Hello World';
  }
}
