import {
  GraphQLInt,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { AuthorType } from "./author";
import { authors_sample } from "~/lib/db/sample/authors_sample";

export interface IGQLBlogInfo {
  blog_id: string;
  tags: string[];
  thumbnail: string;
  title: string;
  description: string;
  date: string;
  author_id: string;
}

export interface IGQLBlogContent {
  blog_id: string;
  content: string;
}
export const BlogInfoType = new GraphQLObjectType({
  name: "BlogInfo",
  fields() {
    return {
      blog_id: { type: GraphQLString },
      title: { type: GraphQLString },
      thumbnail: { type: GraphQLString },
      description: { type: GraphQLString },
      read_duration: { type: GraphQLInt },
      date: { type: GraphQLString },
      tags: { type: new GraphQLList(GraphQLString) },
      author: {
        type: AuthorType,
        resolve(parent, args) {
          return authors_sample.find(
            (author) => author.author_id == parent.author_id,
          );
        },
      },
    };
  },
});

export const BlogContentType = new GraphQLObjectType({
  name: "BlogContent",
  fields() {
    return {
      blog_id: { type: GraphQLString },
      content: { type: GraphQLString },
    };
  },
});
