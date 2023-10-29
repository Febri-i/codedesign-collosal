import {
  GraphQLBoolean,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";

export interface IComment {
  username: string;
  email: string;
  comment: string;
  date: string;
}

export const CommentType = new GraphQLObjectType({
  name: "Comment",
  fields() {
    return {
      username: { type: GraphQLString },
      comment: { type: GraphQLString },
      email: { type: GraphQLString },
      date: { type: GraphQLString },
    };
  },
});
export const CommentListQueryType = new GraphQLObjectType({
  name: "CommentListQuery",
  fields() {
    return {
      done: { type: GraphQLBoolean },
      commentList: {
        type: new GraphQLList(CommentType),
        resolve(parent) {
          return parent.commentList;
        },
      },
    };
  },
});
