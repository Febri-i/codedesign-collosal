import { GraphQLFieldConfig, GraphQLNonNull, GraphQLString } from "graphql";
import { _DBGetAuthorInfo } from "~/lib/db/author";
import { AuthorType } from "../types/author";

const authorInfo: GraphQLFieldConfig<any, any> = {
  type: AuthorType,
  args: { author_id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve(_parent, args: { author_id: string }) {
    return _DBGetAuthorInfo(args.author_id);
  },
};
export const AuthorQuery = { authorInfo };
