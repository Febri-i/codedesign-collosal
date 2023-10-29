import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import { _DBAddComment, _DBGetCommentList } from "~/lib/db/comment";
import { CommentType } from "../types/comment";
import { createPartialGQLQueryType } from "./portialListQueryTemplate";

const commentList: GraphQLFieldConfig<any, any> = {
  type: createPartialGQLQueryType(CommentType),
  args: {
    blog_id: { type: new GraphQLNonNull(GraphQLString) },
    page: { type: new GraphQLNonNull(GraphQLInt) },
    size: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_parent, args: { blog_id: string; page: number; size: number }) =>
    _DBGetCommentList(args.blog_id, args.page, args.size),
};
const addComment: GraphQLFieldConfig<any, any> = {
  type: CommentType,
  args: {
    blog_id: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    username: { type: new GraphQLNonNull(GraphQLString) },
    comment: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (
    _parent,
    args: {
      blog_id: string;
      comment: string;
      email: string;
      username: string;
    },
  ) => _DBAddComment(args.blog_id, args.comment, args.email, args.username),
};

export const CommentQuery = { addComment, commentList };
