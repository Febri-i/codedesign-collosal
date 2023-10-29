import { IAuthor } from "../graphql/types/author";
import { authors_sample } from "./sample/authors_sample";

export function _DBGetAuthorInfo(author_id: string): IAuthor | undefined {
  return authors_sample.find((author) => author.author_id == author_id);
}
