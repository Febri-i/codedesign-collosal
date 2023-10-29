import {
  GraphQLFieldConfig,
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
} from "graphql";
import {
  _DBGetBlogContent,
  _DBGetBlogInfo,
  _DBGetBlogInfoList,
} from "~/lib/db/blog";
import { BlogContentType, BlogInfoType } from "../types/blog";
import { createPartialGQLQueryType } from "./portialListQueryTemplate";

const blogInfoList: GraphQLFieldConfig<any, any> = {
  type: createPartialGQLQueryType(BlogInfoType),
  args: {
    size: { type: new GraphQLNonNull(GraphQLInt) },
    page: { type: new GraphQLNonNull(GraphQLInt) },
  },
  resolve: (_parent, args: { size: number; page: number }) =>
    _DBGetBlogInfoList(args.page, args.size),
};

const blogInfo: GraphQLFieldConfig<any, any> = {
  type: BlogInfoType,
  args: { blog_id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve: (_parent, args: { blog_id: string }) => _DBGetBlogInfo(args.blog_id),
};

const blogContent: GraphQLFieldConfig<any, any> = {
  type: BlogContentType,
  args: { blog_id: { type: new GraphQLNonNull(GraphQLString) } },
  resolve: (_parent, args: { blog_id: string }) =>
    _DBGetBlogContent(args.blog_id),
};

export const BlogQuery = {
  blogContent,
  blogInfo,
  blogInfoList,
};
